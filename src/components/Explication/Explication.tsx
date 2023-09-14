import "./explication.css";

interface PropsExplication {
  exercBarraFixa: boolean;
  explRemadaCabos: boolean;
  explRemadaUnilateral: boolean;
  explCavalinho: boolean;
  explRoscaUnilateral: boolean;
  explRoscaInclinado: boolean;
  explRoscaBanco: boolean;
  explMartelo: boolean;
  explPanturrilhaAparelho: boolean;
  explPanturrilhaLegPress: boolean;
  explPanturrilhaEscada: boolean;
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
      {props.explRemadaUnilateral && (
        <div className="explication">
          <p>Remada Unilateral</p>
        </div>
      )}
      {props.explCavalinho && (
        <div className="explication">
          <p>Cavalinho</p>
        </div>
      )}
      {props.explRoscaUnilateral && (
        <div className="explication">
          <p>Rosca Unilateral</p>
        </div>
      )}
      {props.explRoscaInclinado && (
        <div className="explication">
          <p>Rosca Inclinado</p>
        </div>
      )}
      {props.explRoscaBanco && (
        <div className="explication">
          <p>Rosca Banco</p>
        </div>
      )}
      {props.explMartelo && (
        <div className="explication">
          <p>Rosca Martelo</p>
        </div>
      )}
      {props.explPanturrilhaAparelho && (
        <div className="explication">
          <p>Panturrilha no Aparelho</p>
        </div>
      )}
      {props.explPanturrilhaLegPress && (
        <div className="explication">
          <p>Panturrilha no Leg Press</p>
        </div>
      )}
      {props.explPanturrilhaEscada && (
        <div className="explication">
          <p>Panturrilha na escada</p>
        </div>
      )}
    </>
  );
}

export default Explication;
