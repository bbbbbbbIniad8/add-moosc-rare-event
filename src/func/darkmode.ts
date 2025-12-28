import { createElementClass } from "./common";

function darkmodeSwitch(){
    const header = document.getElementsByClassName("content-header");
    const lightBtn = createElementClass("div", "hidden-xs");

    if (header.length > 0) {
        const targetElement = header[0];
        Object.assign(lightBtn.style, {
            backgroundColor: "transparent",
            backgroundImage: "none",
            padding: "15px 15px",
            fontFamily: "fontAwesome",
            border: "1px solid red"
        });
        lightBtn.textContent = "照明";
        targetElement.prepend(lightBtn);
    }else{
        console.error("エラー: content-wrapper が見つかりません。");
    }
    return lightBtn
}


type colormode = "light" | "dark"
const darkmode = (lightBtn :HTMLElement, nowColorMode: colormode, event: [() => boolean]) => {
    lightBtn.addEventListener("click", () =>{
    const wrapper = document.getElementsByClassName("content-wrapper");
    const wells = document.querySelectorAll(".well");
    const header = document.querySelectorAll(".content-header")

    if (wrapper.length > 0 && wells.length) {
        Object.assign((wrapper[0] as HTMLElement).style, {
            backgroundColor: (nowColorMode === "light" ? "#24272B" : "#ECF0F5")
        });

        wells.forEach(element => {
            Object.assign((element as HTMLElement).style, {
            backgroundColor: (nowColorMode === "light" ? "black" : "white"),
            color: (nowColorMode === "light" ? "white" : "black"),
            borderStyle: "solid",
            borderColor: (nowColorMode === "light" ?  "#262424ff": "#f5f5f5")
        })});

        header.forEach(element => {
            Object.assign((element as HTMLElement).style, {
            backgroundColor: (nowColorMode === "light" ? "#24272B" : "#ECF0F5"),
            color: (nowColorMode === "light" ? "white" : "black"),
        })});

        nowColorMode = (nowColorMode === "light" ? "dark" : "light")
    }else{
        console.error("エラー: 'content-wrapper' というクラスの要素が見つかりません。");
    }

    event.forEach(element => {
        element()
    })
    
})
    return nowColorMode
}

export {darkmodeSwitch, darkmode}