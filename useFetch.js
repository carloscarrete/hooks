import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const [values, setValues] = useState({data: null, error:null, loading:true});
    const isMounted = useRef(true)

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setValues({data:null, loading:true, error:null});

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
                if(isMounted){
                    setValues({
                        error: null,
                        loading: false,
                        data
                    })
                }else{
                    console.log('Hola');
                }

        })
    }, [url])

    return values;

}
