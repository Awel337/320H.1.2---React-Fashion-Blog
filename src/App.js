import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import "./styles.css";

const articles = [
  {
    date: "11/12/20",
    title: "On the Street in Brooklyn",
    image: "blog-image-1.jpg",
    altText: "A fashionable person on the street in Brooklyn",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  },
  {
    date: "11/11/20",
    title: "Vintage in Vogue",
    image: "blog-image-2.jpg",
    altText: "People dressed in vintage fashion",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;