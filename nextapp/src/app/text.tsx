import {Nav} from "./nav.tsx";

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
};




export const Test = ()=>{

    const test=Array(100).fill("")
    return <section>
        <Nav/>
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