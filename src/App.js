import React, { useState } from "react";
import Navbar from "./navigation/Navbar";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import "./index.css";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() )!== -1
  );
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  // filter for buttons
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filterdData = (products, selected, query) => {
    let filterproducts = products;
    if (query) {
      filterproducts = filteredItems;
    }
    if (selected) {
      filterproducts = filterproducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filterproducts.map(
      ({ img, prevPrice, title, reviews, star, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };
  const result = filterdData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
