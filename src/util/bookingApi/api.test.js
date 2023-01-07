import "@testing-library/jest-dom";
import { fetchAPI, submitAPI } from "./api";

describe("Api's fetchAPI function", () => {
  it("return value is not falsy, empty, null or undefined", () => {
    const date = new Date();
    const returnValue = fetchAPI(date);

    expect(returnValue).not.toBeNull();
    expect(returnValue).not.toBeUndefined();

    expect(returnValue).not.toBeFalsy();
  });
  it("returns an array", () => {
    const date = new Date();
    const returnValue = fetchAPI(date);

    expect(Array.isArray(returnValue)).toBe(true);
  });
  it("returns an array of strings", () => {
    const date = new Date();
    const returnValue = fetchAPI(date);

    returnValue.forEach((item) => {
      expect(typeof item).toBe("string");
    });
  });
  it("returns different values ", () => {
    const date = new Date();
    const firstReturnValue = fetchAPI(date);
    const secondReturnValue = fetchAPI(date);
    const thirdReturnValue = fetchAPI(date);
    const fourthReturnValue = fetchAPI(date);

    expect(firstReturnValue).not.toBe(secondReturnValue);
    expect(secondReturnValue).not.toBe(thirdReturnValue);
    expect(thirdReturnValue).not.toBe(fourthReturnValue);
    expect(thirdReturnValue).not.toBe(secondReturnValue);
    expect(thirdReturnValue).not.toBe(firstReturnValue);
    expect(fourthReturnValue).not.toBe(firstReturnValue);
    expect(fourthReturnValue).not.toBe(firstReturnValue);
    expect(fourthReturnValue).not.toBe(secondReturnValue);
  });
});

describe("Api's submitAPI function", () => {
  it("returns a boolean", () => {
    const result = submitAPI();

    expect(typeof result).toBe("boolean");
  });
  it("returns true ", () => {
    const result = submitAPI();

    expect(result).not.toBeFalsy();
    expect(result).toBeTruthy();
  });
});
