import { useEffect, useState } from 'react';
import './App.css';
import { quotes } from './quotes.js'

function App() {

  useEffect(() => {
    document.title = "Feel Better Quotes"
  }, []);

  const [quote, setQuote] = useState(quotes[0].quote)
  const [author, setAuthor] = useState(quotes[0].author)
  const [key, setKey] = useState(0)

  const randomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    setKey(randomNumber)
    return quotes[randomNumber];
  }
  const btnClick = () => {
    const generateRandomQuote = randomQuote();
    setQuote(generateRandomQuote.quote)
    setAuthor(generateRandomQuote.author)
  };

  return (

    <div className="App">
      <div className="everything">
        <header className="header">

          <h1 className="projectTitle">Feel Better Quotes</h1>
          <section key={key} className="wrapper">
            <p className="quote">"{quote}"</p>
            <p className="author">~{author}</p>
          </section>
          <div id="generateBtn">
            <button onClick={btnClick}>Generate</button>
          </div>

        </header>
        <div>
          <footer>Created by A. Peltonen</footer>
        </div>
      </div>
    </div>
  );

}

export default App;



