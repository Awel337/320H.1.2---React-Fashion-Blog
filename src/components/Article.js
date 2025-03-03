import React from "react";

const Article = ({ date, title, image, altText, content }) => {
  return (
    <article>
      <p>{date}</p>
      <h2>{title}</h2>
      <img src={`/${image}`} alt={altText} /> 
      <p>{content}</p>
      <a href="#" className="continue">Continues ...</a>
    </article>
  );
};

export default Article; 
