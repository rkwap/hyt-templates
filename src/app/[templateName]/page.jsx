import { notFound } from "next/navigation";
import DefaultTemplate from "@/components/Templates/DefaultTemplate";
import MonochromeTemplate from "@/components/Templates/MonochromeTemplate";
import ReadCVTemplate from "@/components/Templates/ReadCVTemplate";
import RetroTemplate from "@/components/Templates/RetroTemplate";
import { TEMPLATES_CONFIG } from "@/config/templates";
import { profileData } from "@/data/profile";

const TEMPLATE_COMPONENTS = {
  DEFAULT_TEMPLATE: DefaultTemplate,
  RETRO_TEMPLATE: RetroTemplate,
  READCV_TEMPLATE: ReadCVTemplate,
  MONOCHROME_TEMPLATE: MonochromeTemplate,
};

export function generateStaticParams() {
  return Object.keys(TEMPLATES_CONFIG).map((name) => ({
    templateName: name,
  }));
}

export default function TemplatePage({ params }) {
  const { templateName } = params;
  const upperName = templateName.toUpperCase();
  const config = TEMPLATES_CONFIG[upperName];
  const Component = TEMPLATE_COMPONENTS[upperName];

  if (!(config && Component)) {
    notFound();
  }

  return (
    <div className={config.className}>
      <Component data={profileData} />
    </div>
  );
}
