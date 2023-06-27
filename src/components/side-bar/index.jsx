import '/src/style/side-bar/index.scss'
export default () => {
  return (
    <>
      <div className="side">
        <div className="side__menu">
          <div className="side__menu__item">
            <img src="src/assets/list/1x/baseline_list_white_24dp.png" alt=""/>
          </div>
          <div className="side__menu__item">
            <img src="src/assets/chart/1x/baseline_insert_chart_outlined_white_24dp.png" alt=""/>
          </div>
          <div className="side__menu__item">
            <img src="src/assets/music/1x/baseline_library_music_white_24dp.png" alt=""/>
          </div>
        </div>
        <div className="side__logo">
          POMODORO
        </div>
      </div>
    </>
  )
}
