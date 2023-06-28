import '/src/style/side-bar/index.scss'
export default () => {
  return (
    <>
      <div className="side">
        <div className="side__menu">
          <div className="side__menu__item__list"/>
          <div className="side__menu__item__chart"/>
          <div className="side__menu__item__music"/>
        </div>
        <div className="side__text">
          POMODORO
        </div>
      </div>
    </>
  )
}
