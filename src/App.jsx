import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
// import Main from "./components/Main";
// import Search from "./components/Search";

function App() {
  return (
    <div className="bg-white dark:bg-dark-bg w-full min-h-screen relative top-0 left-0 h-full py-14">
      <Header />
      <Container />
    </div>
  );
}

export default App;
