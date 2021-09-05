import { Button, Container, MobileStepper, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import * as Creator from "./Creator";
import { ColorSelection } from "./steps/ColorSelection";
import { PatternSelection } from "./steps/PatternSelection";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  section: {
    padding: theme.spacing(1),
  },
  patternList: {
    textAlign: "center",
  },
  pattern: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const styles = useStyles();
  const [creator, setCreator] = useState(Creator.start());
  const [nextCreator, setNextCreator] = useState<Creator.Creator | null>(null);
  const renderStep = () => {
    switch (creator.step) {
      case "Pattern Selection":
        return <PatternSelection creator={creator} onSelect={setNextCreator} />;
      case "Color Selection":
        return <ColorSelection creator={creator} onSelect={setCreator} />;
      default:
        return <Paper>Unknown step</Paper>;
    }
  };
  return (
    <Container className={styles.root}>
      {renderStep()}
      <MobileStepper
        variant="dots"
        steps={4}
        activeStep={Creator.stepNumber(creator)}
        backButton={
          <Button
            onClick={() => setCreator(Creator.back(creator))}
            disabled={Creator.stepNumber(creator) === 0}
          >
            Back
          </Button>
        }
        nextButton={
          <Button
            disabled={nextCreator === null}
            onClick={() => {
              if (nextCreator === null) {
                return;
              }
              setCreator(nextCreator);
              setNextCreator(null);
            }}
          >
            Next
          </Button>
        }
      />
    </Container>
  );
}

export default App;
