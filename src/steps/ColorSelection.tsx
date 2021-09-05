import { IconButton, makeStyles, Popover, Typography } from "@material-ui/core";
import { ColorSelectionStep, Creator } from "../Creator";
import { Patterns, PatternsMap } from "../patterns/Patterns";
import { Pattern } from "../patterns/Pattern";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useState } from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

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
      <Color value="red" />
      <Color value="green" />
      <Color value="new" />
    </>
  );
}

type ColorProps = {
  value: string;
};

function Color({ value }: ColorProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      {value === "new" && (
        <IconButton
          style={{ fontSize: "2.5rem" }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          title="Add color"
        >
          <AddCircleIcon style={{ fontSize: "2.5rem" }} />
        </IconButton>
      )}
      {value !== "new" && (
        <IconButton
          style={{ color: value, fontSize: "3rem" }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <FiberManualRecordIcon style={{ fontSize: "3rem" }} />
        </IconButton>
      )}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <IconButton style={{ color: "red", fontSize: "3rem" }}>
          <FiberManualRecordIcon style={{ fontSize: "3rem" }} />
        </IconButton>
        <IconButton style={{ color: "green", fontSize: "3rem" }}>
          <FiberManualRecordIcon style={{ fontSize: "3rem" }} />
        </IconButton>
        {value !== "new" && (
          <IconButton style={{ fontSize: "2.5rem" }} title="Remove color">
            <RemoveCircleIcon style={{ fontSize: "2.5rem" }} />
          </IconButton>
        )}
      </Popover>
    </>
  );
}
