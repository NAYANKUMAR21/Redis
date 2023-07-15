import React, { useEffect, useState } from 'react';

import Articles from './components/Articles';
import COunter from './components/COunter';

const title = 'Sorting Articles';

function App({ articles }) {
  const [Article, setArticleArray] = useState(articles);
  const [count, setCount] = useState(0);
  const handleClickVotesDEscending = () => {
    console.log('inside 1');
    let x = Article.sort((a, b) => b.upvotes - a.upvotes);
    setArticleArray(x);
    setCount(count + 1);
  };

  const handleCLickDateDescending = async () => {
    console.log('inside 2');
    let y = await Article.sort((a, b) => new Date(b.date) - new Date(a.date));
    setArticleArray(y);
    setCount(count - 1);
  };

  useEffect(() => {
    let x = Article.sort((a, b) => b.upvotes - a.upvotes);
    setArticleArray(x);
    setCount(count - 1);
  }, []);
  const Inc = () => {
    setCount(count + 1);
  };
  const Dec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>
        <label>Sort By</label>
        <button onClick={handleClickVotesDEscending}>Most Upvoted</button>
        <button onClick={handleCLickDateDescending}>Most Recent</button>
      </div>
      <Articles articles={Article} />
    </div>
  );
}

export default App;
