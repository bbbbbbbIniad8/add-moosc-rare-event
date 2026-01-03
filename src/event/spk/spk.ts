import { addWell } from "../../func/common";

function addSpk(parentElement: Element){
    const element = addWell(parentElement,
                            "情報連携のためのｽﾋﾟｷ",
                            chrome.runtime.getURL("src/event/spk/pic/spk.png"),
                            "https://youtu.be/HDjdSK-oRC4?si=-nmF90E9IKcBW9eB")
    return element
}

export {addSpk}