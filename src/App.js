import "./App.css";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Navbar d="about"/>
      <TextForm heading="Enter the text to analyze below"/>
    </>
  );
}

export default App;
