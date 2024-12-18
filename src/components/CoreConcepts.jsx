import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import "./CoreConcepts.css";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((element) => (
          <CoreConcept key={element.title} {...element} />
        ))}
      </ul>
    </Section>
  );
}
