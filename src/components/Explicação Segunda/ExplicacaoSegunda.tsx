import "./ExplicacaoSegunda.css";
import explMuscleBarraFixa from "../../../public/expl-barra-fixa.webp";

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

function ExplicacaoSegunda(props: PropsExplication) {
  return (
    <>
      {props.explBarraFixa && (
        <div className="explication">
          <div className="header-explication">
            <p className="tittle-explication">
              Como fazer a barra fixa pull up
            </p>
            <div className="close-box">
              <button
                className="close-explication"
                onClick={() => props.setExplBarraFixa(false)}
              >
                X
              </button>
            </div>
          </div>
          <div className="body-explanation">
            <div className="texts">
              <p>
                Ele é feito com a pegada pronada, em que as palmas das mãos
                ficam voltadas para fora e as costas das mãos ficam em direção
                ao corpo.
              </p>
              <p>
                Para realizar o movimento corretamente, é importante segurar a
                barra com a pegada aberta pronada. Primeiramente, se pendure na
                barra com os braços esticados e as mãos afastadas na mesma
                largura dos ombros.
              </p>
              <p>
                Em seguida, flexione os joelhos e cruze os tornozelos. Então,
                contraia os glúteos e as escápulas dos ombros e faça força para
                levantar o corpo para o alto até que seus ombros fiquem abaixo
                da barra e seus braços fiquem em um ângulo de 90 graus.
              </p>
              <p>
                Mantenha-se no alto por alguns segundos e desça em um movimento
                controlado até seus braços ficarem esticados novamente. Repita o
                movimento até completar as repetições da sua série.
              </p>
            </div>
            <div className="image-container">
              <img className="image-muscle" src={explMuscleBarraFixa}></img>
            </div>
          </div>
          <div className="footer-container">
            <div className="errors">
              <div>
                <p>Erros comuns</p>
              </div>
              <div>
                <p className="tittle-error">
                  Abrir muito os cotovelos durante a subida
                </p>
                <p className="description-error">
                  Para ativar os músculos corretamente, é importante manter os
                  cotovelos próximos do tronco durante o pull up.
                </p>
              </div>
              <div>
                <p className="tittle-error">Balançar durante o movimento</p>
                <p className="description-error">
                  Balançar o corpo exige menos dos músculos e isso pode tornar o
                  pull up menos eficiente para o ganho de massa muscular.
                </p>
              </div>
              <div>
                <p className="tittle-error">Não manter abdômen contraído</p>
                <p className="description-error">
                  Contrair o abdômen é indispensável para proteger a coluna
                  durante qualquer exercício na barra fixa. Além disso, é
                  indicado estufar o peito para ajudar a manter a postura
                  correta.
                </p>
              </div>
            </div>
            <div className="weight">
              <div>
                <p>Peso que consegue pegar</p>
              </div>
            </div>
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

export default ExplicacaoSegunda;
