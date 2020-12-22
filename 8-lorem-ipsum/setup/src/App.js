import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault()
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 1
    }
    if (amount > data.index + 1) {
      amount = data.index + 1
    }
    setText(data.slice(0, amount));
  }

  return <section className="section-center">
    <h3>Tired of boring Lorem Ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" name="amount" id="amount" value={count} onChange={e => setCount(e.target.value)} />
      <button className="btn" type="submit">Generate</button>
    </form>
    <article className="lorem-text">
      {text.map((item, index) => <p key={index}>{item}</p>)}
    </article>
  </sections>;
}

export default App;
