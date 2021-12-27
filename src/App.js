import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import { PostPage } from "./pages/PostPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mdtest" element={<PostPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
