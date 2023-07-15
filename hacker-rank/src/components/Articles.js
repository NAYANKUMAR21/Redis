import React from 'react';

function Articles({ articles }) {
  console.log('count');

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.upvotes}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
