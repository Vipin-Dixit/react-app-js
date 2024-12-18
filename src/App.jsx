import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { Component, useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  let tabContent = "Please select a topic.";
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>
          {selectedTopic
            ? EXAMPLES[selectedTopic].title
            : `plesase select a
      topic`}
        </h3>
        <p>
          {selectedTopic
            ? EXAMPLES[selectedTopic].description
            : `plesase
      select a topic`}
        </p>
        <pre>
          <code>
            {selectedTopic
              ? EXAMPLES[selectedTopic].code
              : `plesase select a
        topic`}
          </code>
        </pre>
      </div>
    );
  }
  /*   const coreConceptData = CORE_CONCEPTS.map((element) => {
    return <CoreConcepts {...element} />;
  }); */
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((element) => (
              <CoreConcepts key={element.title} {...element} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
