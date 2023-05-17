import React, { useState, useEffect } from 'react';



const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

   const handleClick = () => {
    getQuote();
   }

  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="www.twitter.com" id="twet-quote">
            <span><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbKjbej-ce6Pq_8jIkrSDV9t3XWAJFuJUlYpNqsqNag&s' alt="" /></span>
          </a>
          <a href="#" id="tumlr-quote">
            <span><img src='https://cdn-icons-png.flaticon.com/512/145/145811.png' alt="" /></span>
          </a>
        </div>
         <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
  )
}

export default Quotes;