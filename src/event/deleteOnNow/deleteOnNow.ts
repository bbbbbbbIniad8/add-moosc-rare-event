import { colorOut } from "../../effect/effect";


function deleteOnNowEvent(){
    const div = colorOut("black", 0.0)
    for (let i: number=0; i<10000; i++){
        const element = document.createElement("div")
        element.textContent = "すぐにけせ"
        element.style.color = "red"
        element.style.padding = "0 3px 0 3px"
        div.appendChild(element)
        console.log("すぐにけせ すぐにけせ すぐにけせ すぐにけせ すぐにけせ すぐにけせ")
    }
    Object.assign(div.style, {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        pointerEvents: "",
        userSelect: "none",
    }
    )
}

export { deleteOnNowEvent }