import { randomNum, changeBackgraundColor, deleteAllAnchersHref, addWell, sleep } from "../../func/common";
import { shake, flash, colorOut } from "../../effect/effect";
import type { colorMode } from "../../type/type";


function addUboaWell(parentElement: Element){
    const element = addWell(parentElement,
                            "   ",
                            chrome.runtime.getURL("src/event/uboa/pic/poniko.png"),
                            "https://www.youtube.com/watch?v=XrHzcWBeLyI") 
    element.id = "poniko"
    parentElement.prepend(element);
    return element
}

function uboaEvent(btn: HTMLElement, color: colorMode){
    if (randomNum(0, 63) === 4 && color === "light"){
        flash()
        shake()
        const poniko = document.querySelector("body > div.wrapper > div > section.content.container-fluid > div:nth-child(1) > div:nth-child(1) > div > div > div.media-left.media-middle > img") as HTMLImageElement
        const ponikoHeading = document.querySelector("#poniko > div > div > div.media-body.media-middle > h4")

        if (poniko !== null && ponikoHeading !== null){
            poniko.src = chrome.runtime.getURL("src/event/uboa/pic/Uboa1.png")
            ponikoHeading.textContent = ""
            const well = document.querySelectorAll(".well");

            well.forEach(element => {
                if (!element.contains(poniko)){
                Object.assign((element as HTMLElement).style, {
                display: "none"
                })
                }
            });
            changeBackgraundColor("#710000ff")
            btn.onclick = () => {flash()}
            deleteAllAnchersHref()
            const linkBtn = document.querySelector("#poniko > div > div > div.media-body.media-middle > a") as HTMLAnchorElement
            
            linkBtn.style.backgroundColor = "#710000ff"
            linkBtn.textContent = "繝ｪ繝ｳ繧ｯ"
            const title = document.querySelector("h4")
            if(title){
                title.textContent = "   "
            }
            linkBtn.onclick = async function(){
                poniko.src = chrome.runtime.getURL("src/event/uboa/pic/Uboa2.png")
                await sleep(500)
                const black = colorOut("black", 0.5)
                await sleep(500)
                
                window.location.href = chrome.runtime.getURL("src/event/uboa/uboa.html")
                await sleep(1000)
                black.style.display = "none"
                poniko.src = chrome.runtime.getURL("src/event/uboa/pic/Uboa1.png")
            }
        } else {
            console.log("エラー")
        }
    }
}

export { uboaEvent, addUboaWell }