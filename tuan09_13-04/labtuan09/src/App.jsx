import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SummerRecipes from "./components/SummerRecipes";
import RecipesWithVideos from "./components/RecipesWithVideos";
import EditorsPick from "./components/Editor'sPick";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <main className="px-4 md:px-12 lg:px-24 space-y-16 py-8">
        <SummerRecipes />
        <RecipesWithVideos />
        <EditorsPick />
      </main>
      <Footer />
    </div>
  );
};

export default App;