export type PatternSelectionStep = {
  step: "Pattern Selection";
};

export type ColorSelectionStep = {
  step: "Color Selection";
  pattern: string;
};

export type PersonalInformationStep = {
  step: "Personal Information";
  pattern: string;
  colors: string[];
};

export type SummaryStep = {
  step: "Summary";
  pattern: string;
  colors: string[];
  name: string;
  email: string;
};

export type Creator =
  | PatternSelectionStep
  | ColorSelectionStep
  | PersonalInformationStep
  | SummaryStep;

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
    step: "Personal Information",
    pattern,
    colors,
  };
}

export function providePersonalInformation(
  name: string,
  email: string,
  { pattern, colors }: PersonalInformationStep
): Creator {
  return {
    step: "Summary",
    pattern,
    colors,
    name,
    email,
  };
}
