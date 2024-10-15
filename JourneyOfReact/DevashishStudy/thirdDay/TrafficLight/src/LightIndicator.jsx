const LightIndicator = ({lightColor}) => {
    return(
        <>
        <div className='lightIndicator'>
                <div className="green-light" style={{backgroundColor: lightColor === "green" ? "green":""}}></div>
                <div className="yellow-light" style={{backgroundColor: lightColor === "yellow" ? "yellow": "" }}></div>
                <div className="red-light" style={{ backgroundColor: lightColor === "red" ? "red" :"" }} ></div>
                
            </div>
        </>
    );
}
export default LightIndicator