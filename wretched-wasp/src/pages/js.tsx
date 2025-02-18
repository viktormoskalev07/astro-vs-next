import {useEffect, useState} from "react";
import {Nav} from "../layouts/nav.tsx";
const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
};


export const JsPage =()=>{
    const [len , setLen] =useState(0);
    useEffect(() => {
        const int = setInterval(()=>{
            setLen((prev)=>{
                console.log(prev)
                if(prev>100){
                    return 1
                }
                return prev+1
            })
        },100)
        return ()=>{
            clearInterval(int)
        }
    }, [])
    const test=Array(len).fill("")
    return <section>
<Nav/>
        <button onClick={()=>{
            console.log(232)
        }}>
            test
        </button>
        <div style={{display: "grid", gridTemplateColumns: "repeat( 10, 1fr) "}}>
            {test.map((item, key) => {
                const color = getRandomHexColor()
                return <div style={{background: color}} key={key}>
                    hello +{key}
                </div>
            })}
        </div>
    </section>

}