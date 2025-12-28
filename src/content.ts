import './index.css'
import {createWellContent } from './func/common';
import { darkmode, darkmodeSwitch } from './func/darkmode';
import { uboaEvent } from './event/uboa';

const tables = document.getElementsByClassName("row flex")
let uboaEventRun = false

type colormode = "light" | "dark"
const nowColorMode = "light" as colormode

const flashDiv = document.createElement("div");
document.body.appendChild(flashDiv);

if (tables.length > 0) {
    const uboa = createWellContent("情報連携のためのｽﾋﾟｷ",
                                    "https://pbs.twimg.com/media/G7s0RbrbAAIaLs5?format=png&name=medium",
                                  "https://youtu.be/HDjdSK-oRC4?si=-nmF90E9IKcBW9eB")
    tables[0].prepend(uboa);

    const uboa2 = createWellContent("ポ二子",
                                    "https://b2b.mile-stone.jp/p/img/000949148_01_350x350.jpg",
                                  "https://www3.nns.ne.jp/~tk-mto/kikiyamaHP.html")
    uboa2.id = "ポ二子"
    tables[0].prepend(uboa);
    tables[0].prepend(uboa2);
} else {
    console.error("エラー: 'ui-sortable' というクラス名の要素が見つかりませんでした。");
}
const lightBtn = darkmodeSwitch()
if (uboaEventRun === false){

  darkmode(lightBtn, nowColorMode, [() => uboaEvent()])
}