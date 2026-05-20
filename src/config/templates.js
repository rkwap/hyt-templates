import DefaultTemplate from "@/components/Templates/DefaultTemplate";
import MonochromeTemplate from "@/components/Templates/MonochromeTemplate";
import ReadCVTemplate from "@/components/Templates/ReadCVTemplate";
import RetroTemplate from "@/components/Templates/RetroTemplate";

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
};
