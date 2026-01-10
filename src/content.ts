import './index.css';
import { EventManager } from './func/adminFunc';
import { GFEvent } from './event/GF/GF';

const h4 = document.querySelectorAll("h4") as NodeList
const image = document.querySelectorAll(".well img") as NodeList
const name = document.querySelector(".hidden-xs") as HTMLElement;

name.textContent = "偽名 乃介"

h4.forEach((element) => {
  element.textContent = "ダミー"
});

image.forEach((element) => {
  const a = element as HTMLImageElement
  a.src = "https://pbs.twimg.com/profile_images/1807249417877307392/Fi4yHb9e_400x400.jpg"
});

const manager = new EventManager();

manager.decideEvent(null);





window.addEventListener('keydown', async (e) => {
  if (manager.processing) return;

  if (e.key === '9' || e.key === 't') {
    let selectedValue: number | null = null;
    
    if (e.key === 't') {
      const inputValue = prompt();
      selectedValue = Number(inputValue);
      if (selectedValue === 1987) {
        GFEvent();
      }
    }
    
    await manager.reload(selectedValue);
  }
});