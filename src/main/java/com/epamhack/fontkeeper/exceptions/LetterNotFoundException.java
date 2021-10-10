package com.epamhack.fontkeeper.exceptions;

public class LetterNotFoundException extends RuntimeException{
    public LetterNotFoundException() {
        super("Letter not found");
    }
}