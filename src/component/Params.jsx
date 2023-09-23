import { useParams } from "react-router-dom";

function Params(){
    const param = useParams()
    const {name}= param;
    console.log(name)
    return(
        <ul>
            
        <div>This is user page</div>
        <div>{name}</div>
        </ul>
    )
}
export default Params