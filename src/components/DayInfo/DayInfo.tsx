import { useState } from "react";
import "./dayInfo.css";
import panturrilhaLeg from "../../../public/Panturrilha-no-leg-press.webp";
import panturrilhaAparelho from "../../../public/Panturrilha-em-pe-no-aparelho.webp";
import panturrilhaEscada from "../../../public/Elevacao-de-panturrilha-em-pe-escada.webp";
import crucifixo from "../../../public/crucifixo.webp";
import supinoRetoHalter from "../../../public/supino-reto-com-halteres.webp";
import supinoInclinadoHalter from "../../../public/supino-inclinado-com-halteres.webp";
import voadorInclinado from "../../../public/voador-cabo-banco-inclinado.webp";
import tricepsPulley from "../../../public/triceps-puxada-no-pulley.gif";
import tricepsPulleyCabeca from "../../../public/triceps-no-pulley-atras-ca-cabeca.webp";
import extencaoDeitado from "../../../public/extencao-triceps-deitado.webp";
import tricepsCoice from "../../../public/triceps-coice.gif";
import aducao from "../../../public/pernas-aducao-de-pernas-na-maquina.webp";
import abducaoMaquina from "../../../public/abducao-de-pernas-na-maquina-com-cabos.webp";
import agachamentoRack from "../../../public/agachamento-no-rack.webp";
import leg45 from "../../../public/pernas-leg-press-45-tradicional.webp";
import cadeiraExtensora from "../../../public/cadeira-extensora-extensora.gif";
import cadeiraFlexora from "../../../public/cadeira-flexora.gif";
import levantamentoTerra from "../../../public/levantamento-terra-com-barra.webp";
import elevacaoPelvica from "../../../public/elevacao-pelvica.gif";
import Segunda from "../Segunda/Segunda";
import Terca from "../Terça/Terca";
import Quarta from "../Quarta/Quarta";
import Quinta from "../Quinta/Quinta";

interface TypeProps {
  onPressSegunda: () => void;
  onPressTerca: () => void;
  onPressQuarta: () => void;
  onPressQuinta: () => void;
  onPressSexta: () => void;
  onPressSabado: () => void;
  segunda: boolean;
  terca: boolean;
  quarta: boolean;
  quinta: boolean;
  sexta: boolean;
  sabado: boolean;
}

function DayInfo(props: TypeProps) {
  const [page, setPage] = useState(1);

  function closeSexta() {
    props.onPressSexta();
    setPage(1);
  }
  function closeSabado() {
    props.onPressSabado();
    setPage(1);
  }

  function nextExercise() {
    if (page < 3) setPage(page + 1);
  }
  function previousExercise() {
    if (page > 1) setPage(page - 1);
  }

  return (
    <>
      {props.segunda && (
        <Segunda
          onPressSegunda={props.onPressSegunda}
          setPage={setPage}
          page={page}
          nextExercise={nextExercise}
          previousExercise={previousExercise}
        />
      )}
      {props.terca && (
        <Terca
          onPressTerca={props.onPressTerca}
          setPage={setPage}
          page={page}
          nextExercise={nextExercise}
          previousExercise={previousExercise}
        />
      )}
      {props.quarta && (
        <Quarta
          onPressQuarta={props.onPressQuarta}
          setPage={setPage}
          page={page}
          nextExercise={nextExercise}
          previousExercise={previousExercise}
        />
      )}
      {props.quinta && (
        <Quinta
          onPressQuinta={props.onPressQuinta}
          setPage={setPage}
          page={page}
          nextExercise={nextExercise}
          previousExercise={previousExercise}
        />
      )}
      {props.sexta && (
        <div className="containerWorkDay">
          <div className="headerWorkDay">
            <p className="marginHeader">Sexta</p>
            <p>Peito - Triceps - Abdomem</p>
            <button className="btnClose" onClick={closeSexta}>
              X
            </button>
          </div>
          <div className="container-exercises">
            {page === 1 && (
              <div className="title-exercises">
                <p style={{ height: 40 }}>Peito</p>
                <div className="exercises">
                  <div>
                    <div className="blocks">
                      <p>Supino reto com halteres</p>
                      <img
                        src={supinoRetoHalter}
                        className="img-exercices"
                      ></img>
                    </div>
                    <div className="blocks">
                      <p>Supino inclinado com halteres</p>
                      <img
                        src={supinoInclinadoHalter}
                        className="img-exercices"
                      ></img>
                    </div>
                  </div>
                  <div className="next" onClick={nextExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta avançar"
                    ></img>
                  </div>
                  <div>
                    <div className="blocks">
                      <p>Crucifixo</p>
                      <img src={crucifixo} className="img-exercices"></img>
                    </div>
                    <div className="blocks">
                      <p>Voador no cabo com banco inclinado</p>
                      <img
                        src={voadorInclinado}
                        className="img-exercices"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {page === 2 && (
              <div className="title-exercises">
                <p style={{ height: 40 }}>Triceps</p>
                <div className="exercises">
                  <div>
                    <div className="blocks">
                      <p>Tríceps na polia alta com barra reta</p>
                      <img src={tricepsPulley} className="img-exercices"></img>
                    </div>
                    <div className="blocks">
                      <p>Extensão de tríceps no cabo sob a cabeça com corda</p>
                      <img
                        src={tricepsPulleyCabeca}
                        className="img-exercices"
                      ></img>
                    </div>
                  </div>
                  <div className="next" onClick={nextExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta avançar"
                    ></img>
                  </div>
                  <div className="prev" onClick={previousExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta voltar"
                    ></img>
                  </div>
                  <div>
                    <div className="blocks">
                      <p>Extensão de tríceps deitado</p>
                      <img
                        src={extencaoDeitado}
                        className="img-exercices"
                      ></img>
                    </div>
                    <div className="blocks">
                      <p>Triceps Coice</p>
                      <img src={tricepsCoice} className="img-exercices"></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {page === 3 && (
              <div className="title-exercises">
                <p style={{ height: 40 }}>Abdomem</p>
                <div className="exercises">
                  <div>
                    <div className="blocks">
                      <p>Abdomem1</p>
                    </div>
                    <div className="blocks">
                      <p>Abdomem2</p>
                    </div>
                  </div>
                  <div className="prev" onClick={previousExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta voltar"
                    ></img>
                  </div>
                  <div>
                    <div className="blocks">
                      <p>Abdomem3</p>
                    </div>
                    <div className="blocks">
                      <p>Abdomem4</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {props.sabado && (
        <div className="containerWorkDay">
          <div className="headerWorkDay">
            <p className="marginHeader">Sábado</p>
            <p>Coxa - Gluteo - Panturrilha</p>
            <button className="btnClose" onClick={closeSabado}>
              X
            </button>
          </div>
          <div className="container-exercises">
            {page === 1 && (
              <div className="title-exercises">
                <p style={{ height: 40 }}>Coxa</p>
                <div className="exercises">
                  <div>
                    <div className="blocks">
                      <p>Adução e abdução de pernas</p>
                      <img src={aducao} className="img-exercices"></img>
                    </div>
                    <div className="blocks">
                      <p>Abdução na maquina</p>
                      <img src={abducaoMaquina} className="img-exercices"></img>
                    </div>
                  </div>
                  <div className="next" onClick={nextExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta avançar"
                    ></img>
                  </div>
                  <div>
                    <div className="blocks">
                      <p>Agachamento no rack</p>
                      <img
                        src={agachamentoRack}
                        className="img-exercices"
                      ></img>
                    </div>
                    <div className="blocks">
                      <p>Leg45</p>
                      <img src={leg45} className="img-exercices"></img>
                    </div>
                  </div>
                  <div>
                    <div className="blocks">
                      <p>Cadeira extensora</p>
                      <img
                        src={cadeiraExtensora}
                        className="img-exercices"
                      ></img>
                    </div>
                    <div className="blocks">
                      <p>Cadeira Flexora</p>
                      <img src={cadeiraFlexora} className="img-exercices"></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {page === 2 && (
              <div className="title-exercises">
                <p style={{ height: 40 }}>Gluteo</p>
                <div className="exercises">
                  <div>
                    <div className="blocks">
                      <p>Levantamento terra com barra</p>
                      <img
                        src={levantamentoTerra}
                        className="img-exercices"
                      ></img>
                    </div>
                  </div>
                  <div className="next" onClick={nextExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta avançar"
                    ></img>
                  </div>
                  <div className="prev" onClick={previousExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta voltar"
                    ></img>
                  </div>
                  <div>
                    <div className="blocks">
                      <p>Elevação pelvica</p>
                      <img
                        src={elevacaoPelvica}
                        className="img-exercices"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {page === 3 && (
              <div className="title-exercises">
                <p style={{ height: 40 }}>Panturrilha</p>
                <div className="exercises">
                  <div>
                    <div className="blocks">
                      <p>Elevação de panturrilha no aparelho</p>
                      <img
                        src={panturrilhaAparelho}
                        className="img-exercices"
                      ></img>
                    </div>
                    <div className="blocks">
                      <p>Elevação de panturrilha no leg press</p>
                      <img src={panturrilhaLeg} className="img-exercices"></img>
                    </div>
                  </div>
                  <div className="prev" onClick={previousExercise}>
                    <img
                      src="../../../public/arrow.png"
                      alt="Seta voltar"
                    ></img>
                  </div>
                  <div>
                    <div className="blocks">
                      <p>Elevação de panturrilha em pé na escada</p>
                      <img
                        src={panturrilhaEscada}
                        className="img-exercices"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default DayInfo;
