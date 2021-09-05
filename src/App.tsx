import {
  Button,
  Container,
  MobileStepper,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import * as Creator from "./Creator";
import { Pattern } from "./patterns/Pattern";
import { ReactComponent as Pattern1 } from "./patterns/pattern-1.svg";
import { ReactComponent as Pattern2 } from "./patterns/pattern-2.svg";

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
  const renderStep = () => {
    switch (creator.step) {
      case "Pattern Selection":
        return (
          <Paper className={styles.section}>
            <Typography variant="h5">Select a pattern</Typography>
            <div className={styles.patternList}>
              <Button
                onClick={() =>
                  setCreator(Creator.selectPattern("pattern-1", creator))
                }
              >
                <Pattern
                  className={styles.pattern}
                  PatternSource={Pattern1}
                  colors={[]}
                />
              </Button>
              <Button
                onClick={() =>
                  setCreator(Creator.selectPattern("pattern-1", creator))
                }
              >
                <Pattern
                  className={styles.pattern}
                  PatternSource={Pattern2}
                  colors={[]}
                />
              </Button>
            </div>
          </Paper>
        );
      case "Color Selection":
        return (
          <Paper className={styles.section}>
            <Typography variant="h5">Select colors</Typography>
            <div className={styles.patternList}>
              <Pattern
                className={styles.pattern}
                PatternSource={Pattern1}
                colors={["red", "green", "blue"]}
              />
            </div>
            <Button onClick={() => setCreator(Creator.start())}>Back</Button>
          </Paper>
        );

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
        backButton={<Button>Back</Button>}
        nextButton={<Button>Next</Button>}
      />
    </Container>
  );
}

export default App;
