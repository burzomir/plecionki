import React, { useEffect, useState } from "react";

export type PatternProps = {
  PatternSource: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  colors: string[];
};

export function Pattern({ PatternSource, colors }: PatternProps) {
  const [svg, setSvg] = useState<SVGSVGElement | null>(null);
  useEffect(() => {
    svg?.querySelectorAll("path").forEach((path, index) => {
      if (colors.length === 0) {
        path.style.fill = "none";
      } else {
        const colorIndex = index % colors.length;
        path.style.fill = colors[colorIndex];
      }
    });
  }, [svg, colors]);
  return <PatternSource ref={setSvg} />;
}