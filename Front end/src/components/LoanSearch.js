import React from "react";
import { useState, useEffect } from "react";

export default function LoanSearch(props) {
  const defaultInputState = {
    loanAmount: "",
    interestRate: "",
    durationYears: "",
  };

  const [input, setInput] = useState(defaultInputState);

  useEffect(() => {
    props.handleSearchInput(input);
  }, [input]);

  const handleChange = (element) => {
    const name = element.target.name;
    const value = element.target.value;
    // console.log(`name: ${name}, value: ${value}`);
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    // console.log("Submit loan calculator info ");
    props.handleOnSubmit();
  };
  return (
    <section className="search">
      <form className="search-form search-calculator">
        <div className="form-control">
          <input
            onChange={handleChange}
            className="form-input"
            type="text"
            name="loanAmount"
            placeholder="Loan Amount (SGD)"
          ></input>
        </div>
        <br></br>
        <div className="form-control">
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="interestRate"
            placeholder="Interest Rate (%)"
          ></input>
        </div>
        <br></br>
        <div className="form-control">
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="durationYears"
            placeholder="Loan Duration (Years)"
          ></input>
        </div>
        <br></br>
        <button className="btn btn-primary" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
    </section>
  );
}
