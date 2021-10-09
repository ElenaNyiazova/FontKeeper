package com.epamhack.fontkeeper.constants;

public interface EndPoints {

    String CSS = "/static/css/{.*\\.css$}";

    String JS = "/static/js/{.*\\.js$}";

    String MANIFEST = "/manifest.json";

    String ICON = "/favicon.ico";

    String ID = "/{id}";

    String MAIN_PAGE = "/main";

    String LETTER_PAGE = "/letter";

    //String PAGE_ROLES = "/roles";

    String PASSWORD = "/password";

    /**
     * API calls:
     */

    String API_PREFIX = "/api/v1";

    String API_FONTS = API_PREFIX + "/fonts";

    /**
     * User management
     */

    String PAGE_LOGIN = "/login";

    String PAGE_USER_PROFILE = "/user";

    String USER_ID = "/{id}";

    String PAGE_USER_REGISTRATION = PAGE_USER_PROFILE + "/registration";

    /**
     * Admin management
     */

    String ADMIN = "/admin";

    String PAGE_RULES = ADMIN + "/rules";

    String PAGE_ADD_RULES = PAGE_RULES + "/newRule";

    String PAGE_ADMIN_LIBRARY = ADMIN + "/library";

    String PAGE_ADMIN_ACCEPTANCE = ADMIN + "/acceptance";

    String PAGE_ADMIN_USERS = ADMIN + "/users";

    /**
     * Fonts
     */

    String PAGE_ADD_FONT = "/addFont";

    String PAGE_EDIT_FONT = "/editFont";

    /**
     * Actions
     */

    String SUCCESS = "/success ";//сообщение об удачном действии: регистрации, сохранении шрифра и т.д

    String WARNING = "/warning";//сообщение об ошибке

}
