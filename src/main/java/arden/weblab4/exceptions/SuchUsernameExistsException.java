package arden.weblab4.exceptions;

public class SuchUsernameExistsException extends RuntimeException{
    public SuchUsernameExistsException(String message) {
        super(message);
    }
}
