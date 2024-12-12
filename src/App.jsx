import reactImg from "./assets/react.svg";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              alt={CORE_CONCEPTS[0].description}
              description={CORE_CONCEPTS[0].description}
              src={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
            />
            <CoreConcepts
              alt={CORE_CONCEPTS[1].description}
              description={CORE_CONCEPTS[1].description}
              src={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
            />
            <CoreConcepts
              alt={CORE_CONCEPTS[2].description}
              description={CORE_CONCEPTS[2].description}
              src={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
            />
            <CoreConcepts
              alt={CORE_CONCEPTS[3].description}
              description={CORE_CONCEPTS[3].description}
              src={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
