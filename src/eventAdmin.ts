import { deleteOnNowEvent } from "./event/deleteOnNow/deleteOnNow";
import { addGary } from "./event/gary/gary";
import { addGF, GFEvent } from "./event/GF/GF";
import { addHatizihanWell } from "./event/hatizihan/hatizihan";
import { monikaEvent } from "./event/monika/process";
import { addRedRoom } from "./event/redRoom/redRoom";
import { addSpk } from "./event/spk/spk";
import { shouldntKilledEvent } from "./event/TheOneYouShouldntKilled/TheOneYouShouldntKilled";
import { addUboaWell, uboaEvent } from "./event/uboa/uboa";
import type { colorMode } from "./type/type";

export interface EventResult {
  nowColorMode?: colorMode;
  lightEvent?: (() => void)[];
  darkEvent?: (() => void)[];
}

export interface EventContext {
  parent: HTMLElement;
  lightBtn: HTMLElement;
  nowColorMode: colorMode;
  bgColor: string;
}

interface GameEvent {
  name: string;
  eventNum: number;
  weight: number;
  action: (ctx: EventContext) => EventResult;
}

export const eventList: GameEvent[] = [
  { 
    name: 'spk',
    eventNum: 1,
    weight: 100, 
    action: (ctx) => { addSpk(ctx.parent); return {}; } 
  },
  { 
    name: 'gary', 
    eventNum: 2,
    weight: 100, 
    action: () => { addGary(); return {}; } 
  },
  { 
    name: 'shouldntKilled', 
    eventNum: 3,
    weight: 100, 
    action: () => { shouldntKilledEvent(); return {}; } 
  },
  { 
    name: 'uboa', 
    eventNum: 4,
    weight: 60, 
    action: (ctx) => {
      addUboaWell(ctx.parent);
      return { lightEvent: [() => uboaEvent(ctx.lightBtn, ctx.nowColorMode)] };
    }
  },
  { 
    name: 'hatizihan', 
    eventNum: 5,
    weight: 40, 
    action: (ctx) => { addHatizihanWell(ctx.parent); return {}; } 
  },
  { 
    name: 'monika', 
    eventNum: 6,
    weight: 35, 
    action: () => { monikaEvent(); return {}; } 
  },
  { 
    name: 'goldenFreddy', 
    eventNum: 7,
    weight: 15, 
    action: (ctx) => {
      const nextColor = addGF(ctx.lightBtn, ctx.nowColorMode, ctx.bgColor);
      return { nowColorMode: nextColor, darkEvent: [() => GFEvent()] };
    }
  },
  { 
    name: 'redRoom', 
    eventNum: 8,
    weight: 15, 
    action: () => { addRedRoom(); return {}; } 
  },
  {
    name: 'deleteOnNow',
    eventNum: 444,
    weight: 1,
    action: () => { deleteOnNowEvent(); return{}}
  }
];