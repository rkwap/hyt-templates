import DefaultTemplate from "@/components/Templates/DefaultTemplate";
import LoraCreamTemplate from "@/components/Templates/LoraCreamTemplate";
import MonochromeTemplate from "@/components/Templates/MonochromeTemplate";
import NightScriptTemplate from "@/components/Templates/NightScriptTemplate";
import ReadCVTemplate from "@/components/Templates/ReadCVTemplate";
import RetroTemplate from "@/components/Templates/RetroTemplate";
import TerminalSpaceTemplate from "@/components/Templates/TerminalSpaceTemplate";
import VesperTemplate from "@/components/Templates/VesperTemplate";

export const TEMPLATES_CONFIG = {
  DEFAULT_TEMPLATE: {
    component: DefaultTemplate,
    className: "bg-white text-zinc-900 min-h-screen w-full",
  },
  RETRO_TEMPLATE: {
    component: RetroTemplate,
    className: "bg-white text-zinc-900 min-h-screen w-full",
  },
  READCV_TEMPLATE: {
    component: ReadCVTemplate,
    className: "bg-[#212121] text-zinc-100 min-h-screen w-full dark",
  },
  MONOCHROME_TEMPLATE: {
    component: MonochromeTemplate,
    className: "bg-[#0a0a0a] text-zinc-100 min-h-screen w-full dark",
  },
  LORA_CREAM_TEMPLATE: {
    component: LoraCreamTemplate,
    // Cream background, dark ink text, body font
    // font-body must be configured in tailwind.config.js (e.g. a serif like Lora)
    className: "bg-[#F6F3EE] text-[#1C1C1A] min-h-screen w-full font-body",
  },
  NIGHT_SCRIPT_TEMPLATE: {
    component: NightScriptTemplate,
    // Near-black background, zinc-100 text, monospace font — terminal/dev aesthetic
    // font-mono should resolve to JetBrains Mono or similar in tailwind.config.js
    className: "bg-[#0a0a0a] text-zinc-100 min-h-screen w-full dark font-mono",
  },
  VESPER_TEMPLATE: {
    component: VesperTemplate,
    // Same dark palette as Vesper, sidebar layout with fixed left nav
    className: "bg-[#0a0a0a] text-zinc-100 min-h-screen w-full dark",
  },
  TERMINALSPACE_TEMPLATE: {
    component: TerminalSpaceTemplate,
    // Same dark palette as TerminalSpace, sidebar layout with fixed left nav
    className: "bg-[#0a0a0a] text-zinc-100 min-h-screen w-full dark",
  },
};
