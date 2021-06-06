import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Tindercards */}
      <TinderCards />
      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
