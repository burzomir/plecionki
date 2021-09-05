import { makeStyles, Typography } from "@material-ui/core";
import { ColorSelectionStep, Creator } from "../Creator";
import { Patterns, PatternsMap } from "../patterns/Patterns";
import { Pattern } from "../patterns/Pattern";

type ColorSelectionProps = {
  creator: ColorSelectionStep;
  onSelect: (creator: Creator) => void;
};

const useStyles = makeStyles((theme) => ({
  patternList: {
    textAlign: "center",
  },
  pattern: {
    margin: theme.spacing(1),
  },
}));

export function ColorSelection({ creator, onSelect }: ColorSelectionProps) {
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
    <>
      <Typography variant="h5">Select colors</Typography>
      <div className={styles.patternList}>
        <Pattern
          className={styles.pattern}
          PatternSource={getPatternSource()}
          colors={[]}
        />
      </div>
    </>
  );
}
