import { useState } from "react";
import ResultCard from "./ResultCard";

const calculateFutureValue = (years) => {
  const principal = 10000;
  const annualInterestRate = 0.07;
  const futureValue = principal * Math.pow(1 + annualInterestRate, years);

  return futureValue;
};

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [yearsToSave, setYearsToSave] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const futureValue = calculateFutureValue(yearsToSave);
    const ageAtEnd = (age) + (yearsToSave);

    setResult({
      firstName: firstName,
      lastName: lastName,
      ageAtEnd: ageAtEnd,
      futureValue: futureValue,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="yearsToSave">Years to Save:</label>
          <input
            type="text"
            id="yearsToSave"
            value={yearsToSave}
            onChange={(e) => setYearsToSave(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && (
        <ResultCard
          firstName={result.firstName}
          lastName={result.lastName}
          ageAtEnd={result.ageAtEnd}
          futureValue={result.futureValue}
        />
      )}
    </div>
  );
};

export default Form;
