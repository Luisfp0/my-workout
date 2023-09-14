import "./explication.css";

interface PropsExplication {
  exercBarraFixa: boolean;
  explRemadaCabos: boolean;
}

function Explication(props: PropsExplication) {
  return (
    <>
      {props.exercBarraFixa && (
        <div className="explication">
          <p>Exercicio barra fixa</p>
        </div>
      )}
      {props.explRemadaCabos && (
        <div className="explication">
          <p>Remada Cabos</p>
        </div>
      )}
    </>
  );
}

export default Explication;
