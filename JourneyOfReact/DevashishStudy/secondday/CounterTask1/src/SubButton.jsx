import { useState } from "react";

const SubButton = ({sub, count}) => {
    // const [div, setDiv] = useState(count)

    // const division = () => {
    //     setDiv(div/2)
    // }

    return(
        <>
        <h4>{count/2}</h4>
        <button onClick={sub}>Sub Value (-)</button>
        </>
    );
}
export default SubButton;