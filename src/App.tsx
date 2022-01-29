import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/details" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
