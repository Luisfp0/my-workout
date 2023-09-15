import "./explication.css";

interface PropsExplication {
  explBarraFixa: boolean;
  setExplBarraFixa: React.Dispatch<React.SetStateAction<boolean>>;
  explRemadaCabos: boolean;
  setExplRemadaCabos: React.Dispatch<React.SetStateAction<boolean>>;
  explRemadaUnilateral: boolean;
  setExplRemadaUnilateral: React.Dispatch<React.SetStateAction<boolean>>;
  explCavalinho: boolean;
  setExplCavalinho: React.Dispatch<React.SetStateAction<boolean>>;
  explRoscaUnilateral: boolean;
  setExplRoscaUnilateral: React.Dispatch<React.SetStateAction<boolean>>;
  explRoscaInclinado: boolean;
  setExplRoscaInclinado: React.Dispatch<React.SetStateAction<boolean>>;
  explRoscaBanco: boolean;
  setExplRoscaBanco: React.Dispatch<React.SetStateAction<boolean>>;
  explMartelo: boolean;
  setExplMartelo: React.Dispatch<React.SetStateAction<boolean>>;
  explPanturrilhaAparelho: boolean;
  setExplPanturrilhaAparelho: React.Dispatch<React.SetStateAction<boolean>>;
  explPanturrilhaLegPress: boolean;
  setExplPanturrilhaLegPress: React.Dispatch<React.SetStateAction<boolean>>;
  explPanturrilhaEscada: boolean;
  setExplPanturrilhaEscada: React.Dispatch<React.SetStateAction<boolean>>;
}

function Explication(props: PropsExplication) {
  return (
    <>
      {props.explBarraFixa && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Exercicio barra fixa</p>
            <button
              className="close-explication"
              onClick={() => props.setExplBarraFixa(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explRemadaCabos && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Remada Cabos</p>
            <button
              className="close-explication"
              onClick={() => props.setExplRemadaCabos(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explRemadaUnilateral && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Remada Unilateral</p>
            <button
              className="close-explication"
              onClick={() => props.setExplRemadaUnilateral(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explCavalinho && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Cavalinho</p>
            <button
              className="close-explication"
              onClick={() => props.setExplCavalinho(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explRoscaUnilateral && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Rosca Unilateral</p>
            <button
              className="close-explication"
              onClick={() => props.setExplRoscaUnilateral(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explRoscaInclinado && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Rosca Inclinado</p>
            <button
              className="close-explication"
              onClick={() => props.setExplRoscaInclinado(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explRoscaBanco && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Rosca Banco</p>
            <button
              className="close-explication"
              onClick={() => props.setExplRoscaBanco(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explMartelo && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Rosca Martelo</p>
            <button
              className="close-explication"
              onClick={() => props.setExplMartelo(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explPanturrilhaAparelho && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Panturrilha no Aparelho</p>
            <button
              className="close-explication"
              onClick={() => props.setExplPanturrilhaAparelho(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explPanturrilhaLegPress && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">Panturrilha no Leg Press</p>
            <button
              className="close-explication"
              onClick={() => props.setExplPanturrilhaLegPress(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
      {props.explPanturrilhaEscada && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication"> Panturrilha na escada</p>
            <button
              className="close-explication"
              onClick={() => props.setExplPanturrilhaEscada(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Explication;
