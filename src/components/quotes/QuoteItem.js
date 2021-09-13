import {Link} from "react-router-dom";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>- {props.author}</figcaption>
        <figcaption className={classes.quoteId}>
          Quote Id: {props.id}
        </figcaption>
      </figure>
      <Link className="btn" to={`quote-detail/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
