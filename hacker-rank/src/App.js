import React, { useEffect, useState } from 'react';

import Articles from './components/Articles';
import COunter from './components/COunter';

const title = 'Sorting Articles';

function App({ articles }) {
  const [Article, setArticleArray] = useState(articles);
  const handleClickVotesDEscending = () => {
    console.log('inside 1');
    let x = Article.sort((a, b) => b.upvotes - a.upvotes);
    setArticleArray(x);
  };

  const handleCLickDateDescending = async () => {
    console.log('inside 2');
    let y = await Article.toSorted(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticleArray(y);
  };

  useEffect(() => {
    let x = Article.toSorted((a, b) => b.upvotes - a.upvotes);
    setArticleArray(x);
  }, []);

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
