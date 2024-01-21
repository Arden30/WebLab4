export default class Validator {

    static xIsValid(x) {
        if (x === null || x === undefined || x === "") return {error: "X is undefined!", success: false}
        if (isNaN(x)) return {error: "X must be a number!", success: false}
        try {
            x = parseFloat(x)
        } catch (error) {
            return {error: "X must be a number!", success: false}
        }
        if (x > 5 || x < -5) return {error: "X must be in [-5, 5]!", success: false}
        return {error: '', success: true}
    }

    static yIsValid(y) {
        if (y === null || y === undefined || y === "") return {error: "Y is undefined!", success: false}
        if (isNaN(y)) return {error: "Y must be a number!", success: false}
        try {
            y = parseFloat(y)
        } catch (error) {
            return {error: "Y must be a number!", success: false}
        }
        if (y > 5 || y < -5) return {error: "Y must be in [-5, 5]!", success: false}
        return {error: '', success: true}
    }

    static rIsValid(r) {
        if (r === null || r === undefined || r === "") return {error: "R is undefined!", success: false}
        if (isNaN(r)) return {error: "R must be a number!", success: false}
        try {
            r = parseFloat(r)
        } catch (error) {
            return {error: "R must be a number!", success: false}
        }
        if (r > 5 || r <= 0) return  {error: "R must be in interval (0, 5]!", success: false}
        return {error: '', success: true}
    }

    static variablesIsValid(x, y, r) {
        let validationInfo = {
            error: '',
            success: true
        }
        if (!Validator.xIsValid(x).success || !Validator.yIsValid(y).success || !Validator.rIsValid(r).success) {
            validationInfo = {
                success: false,
                error: Validator.xIsValid(x).error + Validator.yIsValid(y).error + Validator.rIsValid(r).error
            }
        }

        return validationInfo;
    }
}