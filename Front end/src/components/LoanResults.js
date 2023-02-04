import React from "react";

export default function LoanResults(props) {
  const handleSubmit = () => {
    props.onSearchAgain();
  };

  return (
    <div className="search-form search-calculator">
      <button className="btn btn-primary" onClick={() => handleSubmit()}>
        Clear Results
      </button>
      {props.calculatorOutput.annual_payment ? (
        <div className="card-info">
          <p>
            <span className="card-data">Annual Payment (SGD):</span>{" "}
            {props.calculatorOutput.annual_payment.total}
          </p>
          <p>
            <span className="card-data">Monthly Payment (SGD):</span>{" "}
            {props.calculatorOutput.monthly_payment.total}
          </p>
          <p>
            <span className="card-data">Total Interest Paid (SGD):</span>{" "}
            {props.calculatorOutput.total_interest_paid}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
