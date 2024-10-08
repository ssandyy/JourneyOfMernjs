const Btn = ({name, btnId, btnStyle, btnType}) => {
    
    return(
        <button type={btnType} id={btnId} style={btnStyle}>{name}</button>
    );
}
export default Btn;