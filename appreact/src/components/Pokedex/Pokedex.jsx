export default function Pokedex({ nom, type, evolution }) {
  return (
    <>
      <div className="Pokedex">
        <h2>
          {nom} <br />
          {type} <br />
          {evolution ? <button>EVOLUTION</button> : null} <br />
        </h2>
      </div>
    </>
  );
}

