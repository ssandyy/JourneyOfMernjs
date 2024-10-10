const AddButton = ({add, count}) => {
    // const [mul, setMul] = useState(count)

    // const multiply = () => {
    //     setMul(mul*2)
    // }

    return(
        <>
         <h4>{count*2}</h4>
         <button onClick={add}>Add Value (+)</button>
        </>
    );
}
export default AddButton;