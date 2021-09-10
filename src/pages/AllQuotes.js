import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Ai",
    text: "Yes",
  },
  {
    id: "q3",
    author: "Kevin",
    text: "Seriously",
  },
];

const AllQuotes = () => {
  return (
    <section>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
};

export default AllQuotes;
