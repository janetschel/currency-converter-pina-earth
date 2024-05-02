import React from "react";
import Loading from "../Loading/Loading";
import "./index.css";

interface ResultProps {
  loading: boolean;
  result: number;
  rate: number;
  into: string;
  from: string;
  amount: number;
  update: string;
}

function Result({ loading, result, rate, into, from, amount, update }: ResultProps) {
  
  const fromField = from.split(" ")[0].trim().toUpperCase();
  const intoField = into.split(" ")[0].trim().toUpperCase();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        !isNaN(result) &&
        !isNaN(rate) && (
          <>
            <p className="currency-value">
              {amount} {fromField}{" "} entspricht
            </p>
            <p className="currency-result">
              {result} ({intoField.toUpperCase()}){" "}
              <span
                className={`currency-flag currency-flag-lg currency-flag-${intoField.toLowerCase()}`}
              />
            </p>
            <p className="currency-rate">
              Umrechnungsrate = {rate}{" "}
            </p>
          </>
        )
      )}
    </>
  );
}

export default Result;
