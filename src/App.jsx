import "./App.css";
import Main from "./components/Main/Main.jsx";
import Intro from "./pages/Home/components/Intro/Intro.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";

function App() {
  return <Main>{<Quiz />}</Main>;
}

export default App;
