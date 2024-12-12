import reactImg from "../assets/react.svg";
import { CORE_CONCEPTS } from "../data";
import "./CoreConcepts.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function CoreConcepts({ alt, description, src, title }) {
  return (
    <div>
      <li>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </div>
  );
}

export default CoreConcepts;
