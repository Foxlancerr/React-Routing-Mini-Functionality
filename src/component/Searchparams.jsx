import { useSearchParams } from "react-router-dom"
function Searchparams(){
    const [query,setquery] = useSearchParams()
    console.log(query.get('age'))
    return(
        <div>In here we used searchParams hook
            <input type="text" placeholder="type your query"/>
            <button onClick={(e)=>{
                setquery( e.target.value)
            }}>Submit</button>
        </div>

    )
}
export default Searchparams