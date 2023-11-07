package project.manager.server.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorDefine {
    // NOT_FOUND: 404
    USER_NOT_FOUND("4040", HttpStatus.NOT_FOUND, "Not Found: User Not Found"),
    USER_WITHDRAWAL("4041", HttpStatus.NOT_FOUND, "Not Found: User withdraw"),

    // CONFLICT: 409
    EMAIL_EXIST(
            "4090", HttpStatus.CONFLICT, "Conflict: An account with this email already exists."),
    USER_EXIST("4091", HttpStatus.CONFLICT, "Conflict: An account with this user already exists."),
    NICKNAME_EXIST(
            "4092", HttpStatus.CONFLICT, "Conflict: An account with this nickname already exists."),

    // GONE: 410
    USER_DELETE("4010", HttpStatus.GONE, "GONE: User delete data"),
    USER_EXPEL("4011", HttpStatus.GONE, "GONE: USER expelled"),

    // INTERNAL_SERER_ERROR: 500
    SERVER_ERROR("5000", HttpStatus.INTERNAL_SERVER_ERROR, "Server Error: Internal server error"),

    // UNAUTHORIZED: 401
    ACCESS_DENIED("4010", HttpStatus.UNAUTHORIZED, "Unauthorized: Access denied"),
    TOKEN_INVALID("4011", HttpStatus.UNAUTHORIZED, "Unauthorized: Invalid Token"),
    TOKEN_MALFORMED("4012", HttpStatus.UNAUTHORIZED, "Unauthorized: Token malformed"),
    TOKEN_EXPIRED("4013", HttpStatus.UNAUTHORIZED, "Unauthorized: Token expired"),
    TOKEN_TYPE("4014", HttpStatus.UNAUTHORIZED, "Unauthorized: Wrong token type"),
    TOKEN_UNSUPPORTED("4015", HttpStatus.UNAUTHORIZED, "Unauthorized: Unsupported token"),
    TOKEN_UNKNOWN("4016", HttpStatus.UNAUTHORIZED, "Unknown Error");

    private final String errorCode;
    private final HttpStatus httpStatus;
    private final String message;
}
