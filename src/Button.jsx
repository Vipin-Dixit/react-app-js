/* interface Props{
    onClick:()=>void;
} */

export default function Button() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div>
      <button
        className={activeContentIndex === 0 ? "active" : ""}
        onClick={() => setActiveContentIndex(0)}
      >
        Why React?
      </button>
    </div>
  );
}
