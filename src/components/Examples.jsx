import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import { useState } from "react";
import Tabs from "./Tabs";

export default function Examples() {
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
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      ></Tabs>

      {tabContent}
    </Section>
  );
}
