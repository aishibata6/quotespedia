import QuoteForm from "../components/quotes/QuoteForm";

const AddAQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return (
    <section>
      <h1>Add A Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  );
};

export default AddAQuote;
