import { useQuote } from "./hooks";
import "./Quote.css";
import twitterIcon from "./twitter.svg";
const Quote = ({ data }) => {
  const quotes = useQuote(data);
  return (
    <div id="quote-box">
      <p id="text">
        <span className="text__quotes">“</span>
        {quotes.text}
        <span className="text__quotes">”</span>
      </p>
      <span id="author"> {quotes.author} </span>
      <button id="new-quote" onClick={quotes.getRandomNumber}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        target="_blank"
        href={`https://twitter.com/intent/tweet?${quotes.text}`}
        rel="noreferrer"
      >
        <img src={twitterIcon} alt="twitter icon" />
      </a>
    </div>
  );
};

export default Quote;
