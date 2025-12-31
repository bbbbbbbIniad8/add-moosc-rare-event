import './index.css'
import { darkmode, darkmodeSwitch } from './func/darkmode';
import { addUboaWell, uboaEvent } from './event/uboa/uboa';
import type { colorMode } from './type/type';
import { monikaEvent } from './event/monika/process';
import { addSpk } from './event/spk/spk';
import { randomNum } from './func/common';
import { addHatizihanWell } from './event/hatizihan/hatizihan';
import { deleteOnNowEvent } from './event/deleteOnNow/deleteOnNow';

const pseudoReload = (contentSection: Node | undefined, originalContent : Node | undefined) => {
  if (!contentSection||!contentSection.parentNode || !originalContent) return;
  const newContent = originalContent.cloneNode(true) as Node;
  contentSection.parentNode.replaceChild(newContent, contentSection);
  contentSection = newContent;
  decideEvent()
  return contentSection
};


function decideEvent(){
  const funValMax = 200;
  const funValue = randomNum(0, funValMax)

  const nowColorMode = "light" as colorMode
  const tables = document.getElementsByClassName("row flex")
  const lightBtn = darkmodeSwitch()
  let lightEvent: (() => void)[] = [];
  if (tables.length > 0) {
    if (funValue < 50){
      addSpk(tables[0])
    }else if (funValue < 75){
      addUboaWell(tables[0])
      lightEvent = [() => uboaEvent(lightBtn, nowColorMode)];
    }else if (funValue < 85){
      monikaEvent()
    }else if (funValue < 100){
      addHatizihanWell(tables[0])
    }else if (funValue < 101){
      deleteOnNowEvent()
    }
  } else {
      console.error("エラー");
  }

  darkmode(lightBtn, nowColorMode, lightEvent, null)
}


let originalContent = undefined as Node | undefined;


let contentSection = document.querySelector('.content-wrapper') as Node | undefined;
if (contentSection) {
  originalContent = contentSection.cloneNode(true);
}


decideEvent();

window.addEventListener('keydown', (e) => {
  if (e.key === 'p' || e.key === 'P') {
    contentSection = pseudoReload(contentSection, originalContent);
    console.log("リロード")
  }
    
});