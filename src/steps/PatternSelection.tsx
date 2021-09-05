import { Button, makeStyles, Typography } from "@material-ui/core";
import { Creator, PatternSelectionStep, selectPattern } from "../Creator";
import { Patterns, PatternsMap } from "../patterns/Patterns";
import { Pattern } from "../patterns/Pattern";

type PatternSelectionProps = {
  creator: PatternSelectionStep;
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

export function PatternSelection({ creator, onSelect }: PatternSelectionProps) {
  const styles = useStyles();
  return (
    <>
      <Typography variant="h5">Select a pattern</Typography>
      <div className={styles.patternList}>
        <Button
          onClick={() => onSelect(selectPattern(Patterns.Pattern1, creator))}
        >
          <Pattern
            className={styles.pattern}
            PatternSource={PatternsMap[Patterns.Pattern1]}
            colors={[]}
          />
        </Button>
        <Button
          onClick={() => onSelect(selectPattern(Patterns.Pattern2, creator))}
        >
          <Pattern
            className={styles.pattern}
            PatternSource={PatternsMap[Patterns.Pattern2]}
            colors={[]}
          />
        </Button>
      </div>
    </>
  );
}
