import React from 'react'; //optional

function TweetForm(){
  const placeholder = "What are you humming about?";
  const doStuff = (event) => {
    event.preventDefault();
  }
  return (
    <section className="newtweet">
      <form onSubmit={doStuff} method="post" action="/tweets" className="newtweet__form">
        <textarea className="form__textarea" name="text" placeholder={placeholder}></textarea>
        <input type="submit" value="Tweet" className="form__input"></input>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;