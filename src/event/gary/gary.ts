import { changePointer } from "../../func/common"

function addGary(){
    changePointer(chrome.runtime.getURL("src/event/gary/pic/gary.png"))
}

export {addGary}