import React from "react";
import LoanSearch from "../components/LoanSearch";
import LoanResults from "../components/LoanResults";
import { useState } from "react";

export default function Calculator() {
  const [query, setQuery] = useState({
    loanAmount: "",
    interestRate: "",
    durationYears: "",
  });
  const [calculatorOutput, setCalculatorOutput] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearchInput = (input) => {
    setQuery(input); //input will set some time in the future because it is async
    // console.log(`query: `, input);
  };

  const handleOnSubmit = () => {
    setHasSearched(true);
    onSubmitQuery(query);
  };

  const onSubmitQuery = async (query) => {
    // console.log("query", query);
    const NinjaUrl = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${query.loanAmount}&interest_rate=${query.interestRate}&duration_years=${query.durationYears}`;
    const authToken = process.env.REACT_APP_NINJA_API_KEY;
    try {
      const res = await fetch(NinjaUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": authToken,
        },
      });
      const json = await res.json();
      // console.log("NinjaLoanJson: ", json);
      setCalculatorOutput(json);
    } catch {
      console.log(`API error`);
    }
  };

  const onSearchAgain = () => {
    setHasSearched(false);
    setCalculatorOutput({});
  };

  return (
    <section className="section about-section">
      <h1 className="section-title">home loan calculator</h1>
      {hasSearched ? (
        <LoanResults
          onSearchAgain={onSearchAgain}
          calculatorOutput={calculatorOutput}
        />
      ) : (
        <LoanSearch
          handleSearchInput={handleSearchInput}
          handleOnSubmit={handleOnSubmit}
        />
      )}
    </section>
  );
}
