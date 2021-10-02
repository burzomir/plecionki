import { makeStyles, Popover } from "@material-ui/core";
import { SummaryStep } from "../Creator";
import { Pattern } from "../patterns/Pattern";
import { Patterns, PatternsMap } from "../patterns/Patterns";
import { Step } from "./Step";

type SummaryProps = {
  creator: SummaryStep;
};

const useStyles = makeStyles((theme) => ({
  patternList: {
    textAlign: "center",
  },
  pattern: {
    margin: theme.spacing(1),
  },
}));

export function Summary({ creator }: SummaryProps) {
  const styles = useStyles();
  const getPatternSource = () => {
    switch (creator.pattern) {
      case Patterns.Pattern1:
        return PatternsMap[Patterns.Pattern1];
      case Patterns.Pattern2:
        return PatternsMap[Patterns.Pattern2];
      default:
        throw new Error("Unknown pattern");
    }
  };

  return (
    <Step title="Summary">
      <div className={styles.patternList}>
        <Pattern
          className={styles.pattern}
          PatternSource={getPatternSource()}
          colors={creator.colors}
        />
      </div>
      <p>Your project is ready for order!</p>
    </Step>
  );
}
