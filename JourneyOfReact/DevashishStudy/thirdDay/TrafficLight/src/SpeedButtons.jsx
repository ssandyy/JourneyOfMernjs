const SpeedButtons = ({setSpeed}) => {
  
    return(
    <div className="btns">
        <button className='btn' onClick={() => setSpeed((speed) => (speed<10) ? (speed + 1): speed)}> Speed + </button>
        <button className='btn'  onClick={() => setSpeed((speed) => (speed>0) ? (speed - 1): speed)}> Speed -</button>
      </div>
    );
}
export default SpeedButtons