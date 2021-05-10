import { useState } from "react";

export const useQuote = (data) => {
  const totalQuotes = data.length;
  const [randomNumber, setRandomNumber] = useState(
    generateRandomNumber(totalQuotes)
  );
  const text = data[randomNumber].quote;
  const author = data[randomNumber].author;

  function getRandomNumber() {
    setRandomNumber(generateRandomNumber(totalQuotes));
  }

  return {
    text,
    author,
    getRandomNumber,
  };
};

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
