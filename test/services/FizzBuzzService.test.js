const FizzBuzzServices = require("../../lib/services/FizzBuzzService");
const FizzBuzzService = new FizzBuzzServices;
describe("Testing FizzBuzz Service", () => {
    test("1) apply validation in explorer 1", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        expect(FizzBuzzService.applyValidationInExplorer(explorer1)).toStrictEqual(
            {name: "Explorer1", score: 1, trick: 1} 
        );
    });
    test("2) apply validation in explorer 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        expect(FizzBuzzService.applyValidationInExplorer(explorer3)).toStrictEqual(
            {name: "Explorer3", score: 3, trick: "FIZZ"} 
        );
    });
    test("3) apply validation in explorer 5", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        expect(FizzBuzzService.applyValidationInExplorer(explorer5)).toStrictEqual(
            {name: "Explorer5", score: 5, trick: "BUZZ"} 
        );
    });
    test("4) apply validation in explorer 15", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        expect(FizzBuzzService.applyValidationInExplorer(explorer15)).toStrictEqual(
            {name: "Explorer15", score: 15, trick: "FIZZBUZZ"} 
        );
    });
    test("5) apply validation in explorer 1", () => {
        expect(FizzBuzzService.applyValidationInNumber(1)).toStrictEqual(1);
    });
    test("6) apply validation in explorer 3", () => {
        expect(FizzBuzzService.applyValidationInNumber(3)).toStrictEqual("FIZZ");
    });
    test("7) apply validation in explorer 5", () => {
        expect(FizzBuzzService.applyValidationInNumber(5)).toStrictEqual("BUZZ");
    });
    test("8) apply validation in explorer 15", () => {
        expect(FizzBuzzService.applyValidationInNumber(15)).toStrictEqual("FIZZBUZZ");
    });

});