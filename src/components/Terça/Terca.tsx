import supinoRetoHalter from "../../../public/supino-reto-com-halteres.webp";
import supinoInclinadoHalter from "../../../public/supino-inclinado-com-halteres.webp";
import voadorInclinado from "../../../public/voador-cabo-banco-inclinado.webp";
import tricepsPulley from "../../../public/triceps-puxada-no-pulley.gif";
import tricepsPulleyCabeca from "../../../public/triceps-no-pulley-atras-ca-cabeca.webp";
import extencaoDeitado from "../../../public/extencao-triceps-deitado.webp";
import tricepsCoice from "../../../public/triceps-coice.gif";
import crucifixo from "../../../public/crucifixo.webp";
import ExplicacaoTerca from "../Explicação Terça/ExplicaçãoTerca";
import { useState } from "react";

interface PropsTerca {
  onPressTerca: () => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  previousExercise: () => void;
  nextExercise: () => void;
}

function Terca(props: PropsTerca) {
  const [explSupinoHalter, setExplSupinoAlter] = useState(false);
  const [explSupinoInclinado, setExplSupinoInclinado] = useState(false);
  const [explVoadorNoCabo, setExplVoadorNoCabo] = useState(false);
  const [explCrucifixo, setExplCrucifixo] = useState(false);
  const [explTricepsPulley, setExplTricepsPulley] = useState(false);
  const [explTricepsPulleyCabeca, setExplTricepsPulleyCabeca] = useState(false);

  const [explTricepsTesta, setExplTricepsTesta] = useState(false);
  const [explTricepsCoice, setExplTricepsCoice] = useState(false);

  function closeTerca() {
    props.onPressTerca();
    props.setPage(1);
  }
  return (
    <div className="containerWorkDay">
      <ExplicacaoTerca
        explTricepsCoice={explTricepsCoice}
        setExplTricepsCoice={setExplTricepsCoice}
        explTricepsTesta={explTricepsTesta}
        setExplTricepsTesta={setExplTricepsTesta}
        explTricepsPulleyCabeca={explTricepsPulleyCabeca}
        setExplTricepsPulleyCabeca={setExplTricepsPulleyCabeca}
        explTricepsPulley={explTricepsPulley}
        setExplTricepsPulley={setExplTricepsPulley}
        explCrucifixo={explCrucifixo}
        setExplCrucifixo={setExplCrucifixo}
        explVoadorNoCabo={explVoadorNoCabo}
        setExplVoadorNoCabo={setExplVoadorNoCabo}
        explSupinoInclinado={explSupinoInclinado}
        setExplSupinoInclinado={setExplSupinoInclinado}
        explSupinoHalter={explSupinoHalter}
        setExplSupinoAlter={setExplSupinoAlter}
      ></ExplicacaoTerca>
      <div className="headerWorkDay">
        <p className="marginHeader">Terça</p>
        <p>Peito - Triceps - Abdomem</p>
        <button className="btnClose" onClick={closeTerca}>
          X
        </button>
      </div>
      <div className="container-exercises">
        {props.page === 1 && (
          <div className="title-exercises">
            <p>Peito</p>
            <div className="exercises">
              <div>
                <div
                  className="blocks"
                  onClick={() => setExplSupinoAlter(true)}
                >
                  <p className="tittle">Supino reto com halteres</p>
                  <img src={supinoRetoHalter} className="img-exercices"></img>
                </div>
                <div
                  className="blocks"
                  onClick={() => setExplSupinoInclinado(true)}
                >
                  <p className="tittle">Supino inclinado com halteres</p>
                  <img
                    src={supinoInclinadoHalter}
                    className="img-exercices"
                  ></img>
                </div>
              </div>
              <div className="next" onClick={props.nextExercise}>
                <img src="../../../public/arrow.png" alt="Seta avançar"></img>
              </div>
              <div>
                <div className="blocks" onClick={() => setExplCrucifixo(true)}>
                  <p className="tittle">Crucifixo</p>
                  <img src={crucifixo} className="img-exercices"></img>
                </div>
                <div
                  className="blocks"
                  onClick={() => setExplVoadorNoCabo(true)}
                >
                  <p className="tittle">Voador no cabo com banco inclinado</p>
                  <img src={voadorInclinado} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.page === 2 && (
          <div className="title-exercises">
            <p>Triceps</p>
            <div className="exercises">
              <div>
                <div
                  className="blocks"
                  onClick={() => setExplTricepsPulley(true)}
                >
                  <p className="tittle">Tríceps na polia alta com barra reta</p>
                  <img src={tricepsPulley} className="img-exercices"></img>
                </div>
                <div
                  className="blocks"
                  onClick={() => setExplTricepsPulleyCabeca(true)}
                >
                  <p className="tittle">
                    Extensão de tríceps no cabo sob a cabeça com corda
                  </p>
                  <img
                    src={tricepsPulleyCabeca}
                    className="img-exercices"
                  ></img>
                </div>
              </div>
              <div className="prev" onClick={props.previousExercise}>
                <img src="../../../public/arrow.png" alt="Seta voltar"></img>
              </div>
              <div>
                <div
                  className="blocks"
                  onClick={() => setExplTricepsTesta(true)}
                >
                  <p className="tittle">Extensão de tríceps deitado</p>
                  <img src={extencaoDeitado} className="img-exercices"></img>
                </div>
                <div
                  className="blocks"
                  onClick={() => setExplTricepsCoice(true)}
                >
                  <p className="tittle">Triceps Coice</p>
                  <img src={tricepsCoice} className="img-exercices"></img>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terca;
