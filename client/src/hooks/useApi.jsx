import API from "../services/api";
import { useState } from "react";

const useApi = (urlObject) => {

    let [response,setResponse] = useState(null)
    let [error,setError] = useState("")
    let [loader,setLoader] = useState(false);

    const call = async (payload,type=' ') => {

        setResponse(null);
        setError('');
        setLoader(true);
        try{
            let res = await API(urlObject,payload,type);
            setResponse(res.data);
        }catch(error){
            setError(error.message);
        }finally{
            setLoader(false);
        }
    }

    return{call,response,error,loader};

}

export default useApi;