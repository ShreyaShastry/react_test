import Axios from "axios";
import {useEffect,useState} from "react";
function F1(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200){
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    },[])
    //[] to provide rerendering
    //Axios will return back a promise
    const ListNames = ()=>{
        return data.map((val)=>{
            return <h1>{val.name}</h1>
        })
    }
    return (
        <div>
            <h1>Hello World</h1>
            {ListNames()}
        </div>
    )
}
export default F1;