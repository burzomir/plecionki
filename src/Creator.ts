export type PatternSelectionStep = {
  step: "Pattern Selection";
};

export type ColorSelectionStep = {
  step: "Color Selection";
  pattern: string;
};

export type SummaryStep = {
  step: "Summary";
  pattern: string;
  colors: string[];
};

export type Creator = PatternSelectionStep | ColorSelectionStep | SummaryStep;

export function start(): Creator {
  return {
    step: "Pattern Selection",
  };
}

export function selectPattern(
  pattern: string,
  _: PatternSelectionStep
): Creator {
  return {
    step: "Color Selection",
    pattern,
  };
}

export function selectColors(
  colors: string[],
  { pattern }: ColorSelectionStep
): Creator {
  return {
    step: "Summary",
    pattern,
    colors,
  };
}

export function stepNumber(creator: Creator): number {
  switch (creator.step) {
    case "Pattern Selection":
      return 0;
    case "Color Selection":
      return 1;
    case "Summary":
      return 2;
  }
}

export function back(creator: Creator): Creator {
  switch (creator.step) {
    case "Pattern Selection":
      return start();
    case "Color Selection":
      return start();
    case "Summary":
      return {
        step: "Color Selection",
        pattern: creator.pattern,
      };
  }
}
