"""Multi-entity Permission Model & Team Collaboration.

Provides Role-Based Access Control (RBAC) linking users to entities
(personal, company, team) with specific roles.
"""

from __future__ import annotations

from enum import Enum

from pydantic import BaseModel, Field


class Role(str, Enum):
    """Roles within an entity."""
    OWNER = "owner"
    ADMIN = "admin"
    EDITOR = "editor"
    VIEWER = "viewer"


class EntityAccess(BaseModel):
    """Defines a user's access level to a specific entity."""
    entity_id: str
    role: Role


class User(BaseModel):
    """A user in the DocuClaw system."""
    id: str
    email: str
    name: str
    access: list[EntityAccess] = Field(default_factory=list)


class PermissionManager:
    """Manages multi-entity access control."""

    def __init__(self) -> None:
        # In a real system, this would be backed by a database.
        # For Milestone 6, we use an in-memory mock.
        self._users: dict[str, User] = {}

    def add_user(self, user: User) -> None:
        """Register a user with the permission manager."""
        self._users[user.id] = user

    def grant_access(self, user_id: str, entity_id: str, role: Role) -> None:
        """Grant a user access to an entity with a specific role."""
        if user_id not in self._users:
            raise ValueError(f"User {user_id} not found.")

        user = self._users[user_id]

        # Remove existing access for this entity if present
        user.access = [a for a in user.access if a.entity_id != entity_id]
        user.access.append(EntityAccess(entity_id=entity_id, role=role))

    def revoke_access(self, user_id: str, entity_id: str) -> None:
        """Revoke a user's access to an entity."""
        if user_id not in self._users:
            raise ValueError(f"User {user_id} not found.")

        user = self._users[user_id]
        user.access = [a for a in user.access if a.entity_id != entity_id]

    def has_permission(self, user_id: str, entity_id: str, required_role: Role) -> bool:
        """Check if a user has the required permission for an entity.

        Roles have a hierarchy: OWNER > ADMIN > EDITOR > VIEWER.
        """
        if user_id not in self._users:
            return False

        user = self._users[user_id]
        access = next((a for a in user.access if a.entity_id == entity_id), None)
        if not access:
            return False

        hierarchy = {
            Role.OWNER: 4,
            Role.ADMIN: 3,
            Role.EDITOR: 2,
            Role.VIEWER: 1,
        }

        return hierarchy[access.role] >= hierarchy[required_role]
