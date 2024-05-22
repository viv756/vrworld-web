import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Quotes from "./components/Quotes/Quotes";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Hero />
      <Quotes/>
    </main>
  );
};

export default App;
