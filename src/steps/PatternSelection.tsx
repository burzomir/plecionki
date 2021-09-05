import {
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
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
      <RadioGroup
        row
        onChange={(e) => onSelect(selectPattern(e.target.value, creator))}
      >
        <FormControlLabel
          value={Patterns.Pattern1}
          control={<Radio color="primary" />}
          labelPlacement="top"
          label={
            <Pattern
              className={styles.pattern}
              PatternSource={PatternsMap[Patterns.Pattern1]}
              colors={[]}
            />
          }
        />
        <FormControlLabel
          value={Patterns.Pattern2}
          control={<Radio color="primary" />}
          labelPlacement="top"
          label={
            <Pattern
              className={styles.pattern}
              PatternSource={PatternsMap[Patterns.Pattern2]}
              colors={[]}
            />
          }
        />
      </RadioGroup>
    </>
  );
}
