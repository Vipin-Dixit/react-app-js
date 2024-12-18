import reactImg from "../assets/react.svg";
import { CORE_CONCEPTS } from "../data";
import "./CoreConcepts.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function CoreConcepts({ alt, description, image, title }) {
  return (
    <div>
      <li>
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </div>
  );
}

export default CoreConcepts;
