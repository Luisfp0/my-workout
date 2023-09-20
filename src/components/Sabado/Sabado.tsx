import panturrilhaLeg from "../../../public/Panturrilha-no-leg-press.webp";
import panturrilhaAparelho from "../../../public/Panturrilha-em-pe-no-aparelho.webp";
import panturrilhaEscada from "../../../public/Elevacao-de-panturrilha-em-pe-escada.webp";
import aducao from "../../../public/pernas-aducao-de-pernas-na-maquina.webp";
import abducaoMaquina from "../../../public/abducao-de-pernas-na-maquina-com-cabos.webp";
import agachamentoRack from "../../../public/agachamento-no-rack.webp";
import leg45 from "../../../public/pernas-leg-press-45-tradicional.webp";
import cadeiraExtensora from "../../../public/cadeira-extensora-extensora.gif";
import cadeiraFlexora from "../../../public/cadeira-flexora.gif";
import levantamentoTerra from "../../../public/levantamento-terra-com-barra.webp";
import elevacaoPelvica from "../../../public/elevacao-pelvica.gif";
import { useState } from "react";
import ExplicacaoSabado from "../Explicação Sabado/ExplicacaoSabado";

interface PropsSabado {
  onPressSabado: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Sabado(props: PropsSabado) {
  const [explAducao, setExplAducao] = useState(false);
  const [explAbducaoMaquina, setExplAbducaoMaquina] = useState(false);
  const [explLeg45, setExplLeg45] = useState(false);
  const [explCadeiraExtensora, setExplCadeiraExtensora] = useState(false);
  const [explCadeiraFlexora, setExplCadeiraFlexora] = useState(false);
  const [explAgachamentoRack, setExplAgachamentoRack] = useState(false);
  const [expLevantamentoTerra, setExpLevantamentoTerra] = useState(false);
  const [explElevacaoPelvica, setExplElevacaoPelvica] = useState(false);
  const [explPanturrilhaLeg, setExplPanturrilhaLeg] = useState(false);
  const [explPanturrilhaAparelho, setExplPanturrilhaAparelho] = useState(false);
  const [explPanturrilhaEscada, setExplPanturrilhaEscada] = useState(false);

  function closeSabado() {
    props.onPressSabado();
    props.setPage(1);
  }

  return (
    <div className="containerWorkDay">
      <ExplicacaoSabado
        expLevantamentoTerra={expLevantamentoTerra}
        setExpLevantamentoTerra={setExpLevantamentoTerra}
        explElevacaoPelvica={explElevacaoPelvica}
        setExplElevacaoPelvica={setExplElevacaoPelvica}
        explPanturrilhaLeg={explPanturrilhaLeg}
        setExplPanturrilhaLeg={setExplPanturrilhaLeg}
        explPanturrilhaAparelho={explPanturrilhaAparelho}
        setExplPanturrilhaAparelho={setExplPanturrilhaAparelho}
        explPanturrilhaEscada={explPanturrilhaEscada}
        setExplPanturrilhaEscada={setExplPanturrilhaEscada}
        explAgachamentoRack={explAgachamentoRack}
        setExplAgachamentoRack={setExplAgachamentoRack}
        explCadeiraFlexora={explCadeiraFlexora}
        setExplCadeiraFlexora={setExplCadeiraFlexora}
        explLeg45={explLeg45}
        setExplLeg45={setExplLeg45}
        explCadeiraExtensora={explCadeiraExtensora}
        setExplCadeiraExtensora={setExplCadeiraExtensora}
        explAbducaoMaquina={explAbducaoMaquina}
        setExplAbducaoMaquina={setExplAbducaoMaquina}
        explAducao={explAducao}
        setExplAducao={setExplAducao}
      ></ExplicacaoSabado>
      <div className="headerWorkDay">
        <p className="marginHeader">Sábado</p>
        <p>Coxa - Gluteo - Panturrilha</p>
        <button className="btnClose" onClick={closeSabado}>
          X
        </button>
      </div>
      <div className="container-exercises">
        {props.page === 1 && (
          <div className="title-exercises">
            <p>Coxa</p>
            <div className="exercises">
              <div>
                <div className="blocks" onClick={() => setExplAducao(true)}>
                  <p className="tittle">Adução e abdução de pernas</p>
                  <img src={aducao} className="img-exercices"></img>
                </div>
                <div className="blocks" onClick={() => setExplAbducaoMaquina(true)}>
                  <p className="tittle">Abdução na maquina</p>
                  <img src={abducaoMaquina} className="img-exercices"></img>
                </div>
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div>
                <div className="blocks" onClick={() => setExplAgachamentoRack(true)}>
                  <p className="tittle">Agachamento no rack</p>
                  <img src={agachamentoRack} className="img-exercices"></img>
                </div>
                <div className="blocks" onClick={() => setExplLeg45(true)}>
                  <p className="tittle">Leg45</p>
                  <img src={leg45} className="img-exercices"></img>
                </div>
              </div>
              <div>
                <div className="blocks" onClick={() => setExplCadeiraExtensora(true)}>
                  <p className="tittle">Cadeira extensora</p>
                  <img src={cadeiraExtensora} className="img-exercices"></img>
                </div>
                <div className="blocks" onClick={() => setExplCadeiraFlexora(true)}>
                  <p className="tittle">Cadeira Flexora</p>
                  <img src={cadeiraFlexora} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="title-exercises">
            <p>Gluteo</p>
            <div className="exercises">
              <div>
                <div className="blocks" onClick={() => setExpLevantamentoTerra(true)}>
                  <p className="tittle">Levantamento terra com barra</p>
                  <img src={levantamentoTerra} className="img-exercices"></img>
                </div>
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                <div className="blocks" onClick={() => setExplElevacaoPelvica(true)}>
                  <p className="tittle">Elevação pelvica</p>
                  <img src={elevacaoPelvica} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.page === 3 && (
          <div className="title-exercises">
            <p>Panturrilha</p>
            <div className="exercises">
              <div>
                <div className="blocks" onClick={() => setExplPanturrilhaAparelho(true)}>
                  <p className="tittle">Panturrilha no aparelho</p>
                  <img
                    src={panturrilhaAparelho}
                    className="img-exercices"
                  ></img>
                </div>
                <div className="blocks" onClick={() => setExplPanturrilhaLeg(true)}>
                  <p className="tittle">Panturrilha no leg press</p>
                  <img src={panturrilhaLeg} className="img-exercices"></img>
                </div>
              </div>
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                <div className="blocks" onClick={() => setExplPanturrilhaEscada(true)}>
                  <p className="tittle">Panturrilha em pé na escada</p>
                  <img src={panturrilhaEscada} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sabado;
