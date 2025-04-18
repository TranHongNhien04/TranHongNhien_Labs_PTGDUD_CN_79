import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SummerRecipes from "./components/SummerRecipes";
import RecipesWithVideos from "./components/RecipesWithVideos";
import EditorsPick from "./components/Editor'sPick";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <main className="">
        <SummerRecipes />
        <RecipesWithVideos />
        <EditorsPick />
      </main>
      <Footer />
    </div>
  );
};

export default App;