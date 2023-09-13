import './wrapWeek.css'

interface PropsWrapWeek {
  onPressSegunda: () => void
  onPressTerca: () => void
  onPressQuarta: () => void
  onPressQuinta: () => void
  onPressSexta: () => void
  onPressSabado: () => void
}


function WrapWeek(props: PropsWrapWeek) {

  return (
    <div className='wrapContent'>
      <div className='weekDays'>
        <p onClick={props.onPressSegunda} className='day'>Segunda</p>
        <p onClick={props.onPressTerca} className='day'>Terça</p>
        <p onClick={props.onPressQuarta} className='day'>Quarta</p>
        <p onClick={props.onPressQuinta} className='day'>Quinta</p>
        <p onClick={props.onPressSexta} className='day'>Sexta</p>
        <p onClick={props.onPressSabado} className='day'>Sábado</p>
      </div>
    </div>
  )
}

export default WrapWeek
