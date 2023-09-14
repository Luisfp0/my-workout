import { useState } from "react";
import "./dayInfo.css";

import Segunda from "../Segunda/Segunda";
import Terca from "../Terça/Terca";
import Quarta from "../Quarta/Quarta";
import Quinta from "../Quinta/Quinta";
import Sexta from "../Sexta/Sexta";
import Sabado from "../Sabado/Sabado";

interface DayInfoProps {
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

function DayInfo(props: DayInfoProps) {
  const [page, setPage] = useState(1);

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
        <Sexta
          onPressSexta={props.onPressSexta}
          setPage={setPage}
          page={page}
          nextExercise={nextExercise}
          previousExercise={previousExercise}
        />
      )}
      {props.sabado && (
        <Sabado
        onPressSabado={props.onPressSabado}
        setPage={setPage}
        page={page}
        nextExercise={nextExercise}
        previousExercise={previousExercise}/>
      )}
    </>
  );
}

export default DayInfo;
