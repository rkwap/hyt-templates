import { notFound } from "next/navigation";
import { TEMPLATES_CONFIG } from "@/config/templates";
import { profileData } from "@/data/profile";

export function generateStaticParams() {
  return Object.keys(TEMPLATES_CONFIG).map((name) => ({
    templateName: name,
  }));
}

export default function TemplatePage({ params }) {
  const { templateName } = params;
  const upperName = templateName.toUpperCase();
  const config = TEMPLATES_CONFIG[upperName];

  if (!config) {
    notFound();
  }

  const Component = config.component;

  return (
    <div className={config.className}>
      <Component data={profileData} />
    </div>
  );
}
