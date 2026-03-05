import React from "react";

class Validate extends React.Component {
    static ValidateIsEmpty(value: string): boolean {
        return value.trim() === "";
    }

    static ValidateEmail(value: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }

    static ValidateIsNumber(value: string): boolean {
        return !isNaN(Number(value));
    }
}

export default Validate;