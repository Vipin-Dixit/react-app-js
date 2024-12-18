import "./CoreConcept.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

export default function CoreConcept({ alt, description, image, title }) {
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
