import { IconButton, makeStyles, Popover } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useState } from "react";
import { ColorSelectionStep, Creator, selectColors } from "../Creator";
import { Pattern } from "../patterns/Pattern";
import { Patterns, PatternsMap } from "../patterns/Patterns";
import { Step } from "./Step";

type ColorSelectionProps = {
  creator: ColorSelectionStep;
  onSelect: (creator: Creator | null) => void;
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
  const [colors, setColors] = useState(["new"]);
  const updateColors = (newColors: string[]) => {
    setColors(newColors);
    if (newColors.length === 1) {
      onSelect(null);
    } else {
      const newCreator = selectColors(newColors.slice(0, -1), creator);
      onSelect(newCreator);
    }
  };
  return (
    <Step title="Select colors">
      <div className={styles.patternList}>
        <Pattern
          className={styles.pattern}
          PatternSource={getPatternSource()}
          colors={colors.slice(0, -1)}
        />
      </div>
      <div>
        {colors.map((color, index) => (
          <Color
            key={index}
            value={color}
            onAdd={(c) => updateColors([...colors.slice(0, -1), c, "new"])}
            onRemove={() =>
              updateColors(
                colors.reduce(
                  (cs, c, i) => (i === index ? cs : [...cs, c]),
                  [] as string[]
                )
              )
            }
            onChange={(color) =>
              updateColors(colors.map((c, i) => (i === index ? color : c)))
            }
          />
        ))}
      </div>
    </Step>
  );
}

type ColorProps = {
  value: string;
  onChange: (color: string) => void;
  onAdd: (color: string) => void;
  onRemove: () => void;
};

function Color({ value, onRemove, onAdd, onChange }: ColorProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const select = (color: string) => {
    setAnchorEl(null);
    setTimeout(() => {
      value === "new" ? onAdd(color) : onChange(color);
    });
  };
  const remove = () => {
    setAnchorEl(null);
    setTimeout(() => {
      onRemove();
    });
  };
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
        <IconButton
          style={{ color: "red", fontSize: "3rem" }}
          onClick={() => select("red")}
        >
          <FiberManualRecordIcon style={{ fontSize: "3rem" }} />
        </IconButton>
        <IconButton
          style={{ color: "green", fontSize: "3rem" }}
          onClick={() => select("green")}
        >
          <FiberManualRecordIcon style={{ fontSize: "3rem" }} />
        </IconButton>
        {value !== "new" && (
          <IconButton
            style={{ fontSize: "2.5rem" }}
            title="Remove color"
            onClick={remove}
          >
            <RemoveCircleIcon style={{ fontSize: "2.5rem" }} />
          </IconButton>
        )}
      </Popover>
    </>
  );
}
