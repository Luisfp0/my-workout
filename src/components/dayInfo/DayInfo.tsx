import './dayInfo.css'

interface TypeProps {
  onPressSegunda: () => void
  onPressTerca: () => void
  onPressQuarta: () => void
  onPressQuinta: () => void
  onPressSexta: () => void
  onPressSabado: () => void
  segunda: boolean
  terca: boolean
  quarta: boolean
  quinta: boolean
  sexta: boolean
  sabado: boolean
}

function DayInfo(props: TypeProps) {
  function nextExercise() {
    console.log('próximo')
  }
  function previousExercise() {
    console.log('anterior')
  }

  return (
    <>
      {props.segunda ? 
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p className='marginHeader'>Segunda</p>
            <p>Costas - Biceps - Panturrilha</p>
            <button className='btnClose' onClick={props.onPressSegunda}>X</button>
          </div>
          <div className='container-exercises'>
            <div className='title-exercises'>
              <p>Costas</p>
              <div className='exercises'>
                <div>
                  <div className='blocks'>
                    <p>Exercicio1</p>
                  </div>
                  <div className='blocks'>
                    <p>Exercicio2</p>
                  </div>
                </div>
                <div className='next' onClick={nextExercise}>
                  <img src='../../../public/arrow.png' alt='Seta avançar'></img>
                </div>
                <div className='prev' onClick={previousExercise}>
                  <img src='../../../public/arrow.png' alt='Seta voltar'></img>
                  </div>
                <div>
                  <div className='blocks'>
                    <p>Exercicio3</p>
                  </div>
                  <div className='blocks'>
                    <p>Exercicio4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      :<></>}
      {props.terca ? 
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p>Terca</p>
            <p>Peito - Triceps - Abdomem</p>
            <button className='btnClose' onClick={props.onPressTerca}>X</button>
          </div>
        </div>
      :<></>}
      {props.quarta ? 
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p>Quarta</p>
            <p>Coxa - Gluteo - Panturrilha</p>
            <button className='btnClose' onClick={props.onPressQuarta}>X</button>
          </div>
        </div>
      :<></>}
      {props.quinta ? 
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p>Quinta</p>
            <p>Ombro - Antebraço - Trapezio</p>
            <button className='btnClose' onClick={props.onPressQuinta}>X</button>
          </div>
        </div>
      :<></>}
      {props.sexta ? 
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p>Sexta</p>
            <p>Peito - Triceps - Abdomem</p>
            <button className='btnClose' onClick={props.onPressSexta}>X</button>
          </div>
        </div>
      :<></>}
      {props.sabado ? 
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p>Sabado</p>
            <p>Coxa - Gluteo - Panturrilha</p>
            <button className='btnClose' onClick={props.onPressSabado}>X</button>
          </div>
        </div>
      :<></>}
    </>
  )
}

export default DayInfo