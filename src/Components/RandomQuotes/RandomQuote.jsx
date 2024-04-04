import React, { useEffect, useState } from 'react'
import "./RandomQuote.css"
import twitter_icon from "../Assets/twitter_icon.png"
import next_icon from "../Assets/next_icon.png"

const RandomQuote = () => {

  let apiQuotes = []

  async function getQuotes(){
    const response = await fetch("https://type.fit/api/quotes");
    apiQuotes = await response.json();
  }
  
  const nextQuote = () => {
    if(apiQuotes.length > 0){
      const choose = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
      console.log(apiQuotes)
      setQuote(choose);
    }
    else{
      setQuote(quote);
    }
  }

  const twitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author.split(",")[0]}`);
  }
  
  const [quote , setQuote] = useState({
    text : "Difficulties increase the nearer we get to our goals",
    author : "Johnan Wolfgang",
  });

  getQuotes();

  return (
    <div className='container'>
      <div className='quote'>{quote.text}</div>
      <div>
        <div className='line'></div>
        <div className="bottom">
          <div className="author">
            - {quote.author.split(",")[0]}
          </div>
          <div className='icons'>
              <img src={twitter_icon} alt='' onClick={() => {twitter()}}/>
              <img src={next_icon} alt='' onClick={() => {nextQuote()}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
