package com.epamhack.fontkeeper.enums;

public enum Role {
    USER_ROLE("user_role"),
    ADMIN_ROLE("admin_role");

    private String name;

    Role(final String role) {
        this.name = role;
    }

    @Override
    public String toString() {
        return name;
    }
}
