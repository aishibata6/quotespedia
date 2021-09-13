import {useEffect} from "react";
import {Link, useParams, Route, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
//import NoQuotesFound from "../components/quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Max",
//     text: "Learning React is fun!",
//   },
//   {
//     id: "q2",
//     author: "Ai",
//     text: "Yes",
//   },
//   {
//     id: "q3",
//     author: "Kevin",
//     text: "Seriously",
//   },
// ];

const QuoteDetail = (props) => {
  const match = useRouteMatch();
  const params = useParams();

  const {quoteId} = params;

  console.log(match);

  //const quote = props.loadedQuotes.find((quote) => quote.id === params.quoteId);

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <section>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
        id={loadedQuote.id}
      />
      <Route path={match.path} exact>
        <Link className="centered btn--flat" to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
