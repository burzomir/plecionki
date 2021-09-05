import { Button, makeStyles, Typography } from "@material-ui/core";
import { Creator, PatternSelectionStep, selectPattern } from "../Creator";
import { Pattern } from "../patterns/Pattern";
import { ReactComponent as Pattern1 } from "../patterns/pattern-1.svg";
import { ReactComponent as Pattern2 } from "../patterns/pattern-2.svg";

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
        <Button onClick={() => onSelect(selectPattern("pattern-1", creator))}>
          <Pattern
            className={styles.pattern}
            PatternSource={Pattern1}
            colors={[]}
          />
        </Button>
        <Button onClick={() => onSelect(selectPattern("pattern-1", creator))}>
          <Pattern
            className={styles.pattern}
            PatternSource={Pattern2}
            colors={[]}
          />
        </Button>
      </div>
    </>
  );
}
