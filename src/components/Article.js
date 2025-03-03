import React from "react";

const Article = ({ date, title, image, altText, content }) => {
  return (
    <article>
      <p>{date}</p>
      <h2>{title}</h2>
      <img src={`/${image}`} alt={altText} />
      <p>{content}</p>
      <button className="continue" onClick={() => alert("Continue reading...")}>
        Continues ...
      </button>
    </article>
  );
};

export default Article;
