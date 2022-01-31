import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/details/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
