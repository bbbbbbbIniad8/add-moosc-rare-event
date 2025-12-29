import { addWell } from "../../func/common";

function addSpk(parentElement: Element){
    const element = addWell(parentElement,
                            "情報連携のためのｽﾋﾟｷ",
                            "https://pbs.twimg.com/media/G7s0RbrbAAIaLs5?format=png&name=medium",
                            "https://youtu.be/HDjdSK-oRC4?si=-nmF90E9IKcBW9eB")
    return element
}

export {addSpk}