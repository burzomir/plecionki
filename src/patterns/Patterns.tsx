import { ReactComponent as Pattern1 } from "./pattern-1.svg";
import { ReactComponent as Pattern2 } from "./pattern-2.svg";

export enum Patterns {
  Pattern1 = "Pattern1",
  Pattern2 = "Pattern2",
}

export const PatternsMap = {
  [Patterns.Pattern1]: Pattern1,
  [Patterns.Pattern2]: Pattern2,
};
