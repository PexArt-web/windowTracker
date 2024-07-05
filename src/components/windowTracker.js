import { useEffect, useState } from "react";
const {log} = console

const WindowTracker = () => {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth) 
    useEffect(()=>{
     window.addEventListener('resize',()=>{
        setWindowWidth(window.innerWidth)
     })
     return () =>{
        window.removeEventListener('resize',()=>{
            setWindowWidth(windowWidth.innerWidth)
        })
     }
    }, [])
    return ( 
        <h1>Window width:{windowWidth}</h1>
     );
}
 
export default WindowTracker;