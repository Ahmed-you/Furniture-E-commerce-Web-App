import { sumArrayOfMoney } from "../helpers/utils/sumAnArray.js";
import { createTemplate } from "../helpers/utils/createTemplateUtil.js";

// test for my
test("refactor my createTemplate function", () => {
  expect(
    createTemplate(`<div class = 'HelloWorld'>{{helloWorld}}<div>`, {
      helloWorld: "HeLLo Big Big Big World",
    })
  ).toBe("<div class = 'HelloWorld'>HeLLo Big Big Big World<div>");
});
//test2
test("refactor my createTemplate function", () => {
  expect(
    createTemplate(
      `<div class = 'HelloWorld'>{{helloWorld}}<div>
        <div class = 'HelloWorld'>{{helloMeh}}<div>
        <div class = 'HelloWorld'>{{Var__iable}}<div>
`,
      {
        helloWorld: "HeLLo World",
        helloMeh: "HeLLo Meh",
        Var__iable: "to be sure no one work around the test",
      }
    )
  ).toBe(`<div class = 'HelloWorld'>{{helloWorld}}<div>
        <div class = 'HelloWorld'>{{helloMeh}}<div>
        <div class = 'HelloWorld'>{{Var__iable}}<div>`);
});
//test3
test("refactor my createTemplate function", () => {
  expect(
    createTemplate(`<div class = 'HelloWorld'>{{helloWorld}}<div>`, {
      helloWorld: "HeLLo Big Big Big World",
    })
  ).toBe("<div class = 'HelloWorld'>HeLLo Big Big Big World<div>");
});
//  the summation of a givin array tests
test("refactor my summation array function", () => {
  expect(sumArrayOfMoney([10, 10, 10, 10, 10])).toBe(50);
});
test("refactor my summation array function", () => {
  expect(sumArrayOfMoney([14, 10, 20, 100, 130])).toBe(274);
});
test("refactor my summation array function", () => {
  expect(
    sumArrayOfMoney([
      1032, 12130, 3110, 10431, 123410, 3234234, 4234325, 234235,
    ])
  ).toBe(7852907);
});
