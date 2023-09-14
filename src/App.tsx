import { useState } from "react";
import "./App.css";
import WrapWeek from "./components/WrapWeek/WrapWeek";
import DayInfo from "./components/DayInfo/DayInfo";

function App() {
  const [segunda, setSegunda] = useState(false);
  const [terca, setTerca] = useState(false);
  const [quarta, setQuarta] = useState(false);
  const [quinta, setQuinta] = useState(false);
  const [sexta, setSexta] = useState(false);
  const [sabado, setSabado] = useState(false);

  function onPressSegunda() {
    setSegunda(!segunda);
  }
  function onPressTerca() {
    setTerca(!terca);
  }
  function onPressQuarta() {
    setQuarta(!quarta);
  }
  function onPressQuinta() {
    setQuinta(!quinta);
  }
  function onPressSexta() {
    setSexta(!sexta);
  }
  function onPressSabado() {
    setSabado(!sabado);
  }

  return (
    <div className="app">
      <WrapWeek
        onPressSegunda={onPressSegunda}
        onPressTerca={onPressTerca}
        onPressQuarta={onPressQuarta}
        onPressQuinta={onPressQuinta}
        onPressSexta={onPressSexta}
        onPressSabado={onPressSabado}
      />
      <DayInfo
        onPressSegunda={onPressSegunda}
        onPressTerca={onPressTerca}
        onPressQuarta={onPressQuarta}
        onPressQuinta={onPressQuinta}
        onPressSexta={onPressSexta}
        onPressSabado={onPressSabado}
        segunda={segunda}
        terca={terca}
        quarta={quarta}
        quinta={quinta}
        sexta={sexta}
        sabado={sabado}
      />
    </div>
  );
}

export default App;
