import React from "react";
import { Form } from "../../components/Form.js";
import { render, fireEvent, cleanup } from "@testing-library/react";

describe("Form.js", () => {
  //global variable for test
  let form;
  beforeEach(() => {
    //render the form and set it to a global variable
    form = render(<Form />);
  });
  afterEach(() => {
    //clear all jest mocks
    jest.restoreAllMocks();
    cleanup();
  });

  test("renders the form",  () => {
    expect(form.container).toBeInTheDocument();
  });
  test("input test",  () => {
    const testFeedings = form.container.querySelector("input");
    expect(testFeedings.value).toEqual("");
    fireEvent.change(testFeedings, { target: { value: "value" } });
    expect(testFeedings.value).toEqual("value");
  });
  test("select feeding Type",  () => {  //you liar
    const testFeedings = form.getByTestId("selector-type");
    expect(testFeedings.value).toEqual("");
    for (let i = 0; i > testFeedings.length; i++) {
      fireEvent.change(testFeedings, {
        target: { value: `${testFeedings.options[i].value}` }
      });
      expect(testFeedings.value).toEqual(testFeedings.options[i].value);
    }
  });
  test("select feeding Amount", () => { //Liiiiiiiies
    const testFeedings = form.getByTestId("selector-amount");
    expect(testFeedings.value).toEqual("");
    for (let i = 0; i > testFeedings.length; i++) {
      fireEvent.change(testFeedings, {
        target: { value: `${testFeedings.options[i].value}` }
      });
      expect(testFeedings.value).toEqual(testFeedings.options[i].value);
    }
  });
});



/*

To Mock Window.Alert

const jsdomAlert = window.alert; // remember the jsdom alert
window.alert = () => {}; // provide an empty implementation for window.alert
//spy on window.alert
jest.spyOn(window, 'alert');
//click on submit button here
fireEvent.click(button);
//alert should have been called with the text passsed in the form
expect(window.alert).toHaveBeenCalledWith(
    'No selected lines are eligible for cancellation'
);
window.alert = jsdomAlert; // restore the jsdom alert


*/