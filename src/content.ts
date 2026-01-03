import './index.css'
import { addDarkMode, darkmodeSwitch} from './func/darkmode';
import type { colorMode } from './type/type';
import { sleep } from './func/common';
import { eventList, type EventContext } from './eventAdmin';
import { GFEvent } from './event/GF/GF';

const pseudoReload = (contentSection: Node | undefined, originalContent: Node | undefined, bgColor: string, fanValue: number|null) => {
  if (!contentSection || !contentSection.parentNode || !originalContent) return;
  const newContent = originalContent.cloneNode(true) as Node;
  contentSection.parentNode.replaceChild(newContent, contentSection);
  contentSection = newContent;
  document.body.style.cursor = "default"
  decideEvent(bgColor, fanValue)
  return contentSection
};

function decideEvent(bgColor: string, selectedValue: number | null) {
  let nowColorMode = "light" as colorMode;
  const tables = document.getElementsByClassName("row flex")
  const lightBtn = darkmodeSwitch()
  
  let lightEvent: (() => void)[] = []
  let darkEvent: (() => void)[] = []

  if (tables.length > 0) {
      const totalWeight = eventList.reduce((sum, e) => sum + e.weight, 0)
      let random = !selectedValue ? (Math.random() * totalWeight) : 9999

      for (const event of eventList) {
        if (random < event.weight || selectedValue === event.eventNum) {
          const ctx: EventContext = {
            parent: tables[0] as HTMLElement,
            lightBtn,
            nowColorMode,
            bgColor
          }
          const result = event.action(ctx)
          if (result.nowColorMode) nowColorMode = result.nowColorMode
          if (result.lightEvent) lightEvent = result.lightEvent
          if (result.darkEvent) darkEvent = result.darkEvent
          break;
        }
        random -= event.weight;
      }
    }
  addDarkMode(lightBtn, nowColorMode, bgColor, lightEvent, darkEvent);
}

let originalContent = undefined as Node | undefined;
let contentSection = document.querySelector('.content-wrapper') as Node | undefined;
let bgColor = ""
let isProcessing = false
if (contentSection) {
  originalContent = contentSection.cloneNode(true);
  const contentStyle = window.getComputedStyle(contentSection as Element);
  bgColor = contentStyle.backgroundColor;
}
decideEvent(bgColor, null);
window.addEventListener('keydown', async(e) => {
  let selectedValue = null as number | null
  if ((e.key === '9' || e.key === 't') && isProcessing === false) {
    if (e.key === 't'){
      const inputValue = prompt()
      selectedValue = Number(inputValue)
      if (selectedValue === 1987){
        GFEvent()
      }
    }
    isProcessing = true
    contentSection = pseudoReload(contentSection, originalContent, bgColor, selectedValue)
    document.body.classList.remove("shake-x")
    await sleep(1000)
    isProcessing = false
  } 
});
