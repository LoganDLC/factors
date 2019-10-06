import { Expect, TestCase } from "alsatian";
import { highestCommonFactor } from "./index";

export class CommonFactorTests {

    @TestCase(5, 8, 1)
    @TestCase(20, 52, 4)
    @TestCase(60, 70, 10)
    @TestCase(1000, 800, 200)
    public commonFactorIsCorrect(firstNumber: number, secondNumber: number, expectedResult: number) {
        const commonFactor = highestCommonFactor(firstNumber, secondNumber);
        Expect(commonFactor).toBe(expectedResult);
    }
}
