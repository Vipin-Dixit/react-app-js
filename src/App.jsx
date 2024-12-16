import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { Component, useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
