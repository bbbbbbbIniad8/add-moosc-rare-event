import { randomNum, flash } from "../func/common";

function uboaEvent(){
    if (randomNum(0, 64) > 4){
        flash()
        const poniko = document.querySelector("body > div.wrapper > div > section.content.container-fluid > div:nth-child(1) > div:nth-child(1) > div > div > div.media-left.media-middle > img") as HTMLImageElement
        const ponikoHeading = document.querySelector("#ポ二子 > div > div > div.media-body.media-middle > h4")
        const wrapper = document.querySelector(".content-wrapper");
        
        if (poniko !== null && ponikoHeading !== null && wrapper !== null){
        poniko.src = "https://dic.nicovideo.jp/oekaki/7295.png"
        ponikoHeading.textContent = ""
        const well = document.querySelectorAll(".well");

        well.forEach(element => {
            if (!element.contains(poniko)){
            Object.assign((element as HTMLElement).style, {
            display: "none"
            })
            }
        });

        Object.assign((wrapper as HTMLElement).style, {
            backgroundColor: "#710000ff"
            })

        return true
        }else{
        console.log("エラー")
        }
    }
    return false
}

export {uboaEvent}