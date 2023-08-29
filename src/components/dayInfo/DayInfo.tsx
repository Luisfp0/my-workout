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
  return (
    <>
      {props.segunda ? 
        <div className='containerWorkDay'>
          <div className='headerWorkDay'>
            <p>Segunda</p>
            <p>Costas - Biceps - Panturrilha</p>
            <button className='btnClose' onClick={props.onPressSegunda}>X</button>
          </div>
          <div>
            <p>costas</p>
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