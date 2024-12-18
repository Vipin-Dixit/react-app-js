import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <h2>Time to get started!</h2>
        <Examples />
      </main>
    </div>
  );
}

export default App;
