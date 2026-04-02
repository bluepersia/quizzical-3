import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main.jsx";
import Intro from "./pages/Home/components/Intro/Intro.jsx";
import Quiz from "./pages/Quiz/Quiz.jsx";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Main>{isActive ? <Quiz /> : <Intro setIsActive={setIsActive} />}</Main>
  );
}

export default App;
