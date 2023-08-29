import { useState } from 'react'
import './App.css'
import WrapWeek from './components/WrapWeek/WrapWeek'
import DayInfo from './components/dayInfo/DayInfo'


function App() {
  const [segunda, setSegunda] = useState(false)
  const [terca, setTerca] = useState(false)
  const [quarta, setQuarta] = useState(false)
  const [quinta, setQuinta] = useState(false)
  const [sexta, setSexta] = useState(false)
  const [sabado, setSabado] = useState(false)

  function onPressSegunda():void {
    setSegunda(!segunda)
    console.log(segunda)
  }
  function onPressTerca():void  {
    setTerca(!terca)
    console.log(terca)
  }
  function onPressQuarta():void  {
    setQuarta(!quarta)
    console.log(quarta)
  }
  function onPressQuinta():void  {
    setQuinta(!quinta)
    console.log(quinta)
  }
  function onPressSexta():void  {
    setSexta(!sexta)
    console.log(sexta)
  }
  function onPressSabado():void  {
    setSabado(!sabado)
    console.log(sabado)
  }

  return (
    <div className='app'>
      <WrapWeek 
        onPressSegunda={onPressSegunda}
        onPressTerca={onPressTerca}
        onPressQuarta={onPressQuarta}
        onPressQuinta={onPressQuinta}
        onPressSexta={onPressSexta}
        onPressSabado={onPressSabado}/>
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
  )
}

export default App
