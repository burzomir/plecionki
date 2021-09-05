import { ReactComponent as Pattern1 } from "./patterns/pattern-1.svg";
import { ReactComponent as Pattern2 } from "./patterns/pattern-2.svg";
import { Pattern } from "./patterns/Pattern";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
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
  return (
    <Container className={styles.root}>
      <Paper className={styles.section}>
        <Typography variant="h5">Select a pattern</Typography>
        <div className={styles.patternList}>
          <Pattern
            className={styles.pattern}
            PatternSource={Pattern1}
            colors={[]}
          />
          <Pattern
            className={styles.pattern}
            PatternSource={Pattern2}
            colors={[]}
          />
        </div>
      </Paper>
      <Paper className={styles.section}>
        <Typography variant="h5">Select colors</Typography>
        <div className={styles.patternList}>
          <Pattern
            className={styles.pattern}
            PatternSource={Pattern1}
            colors={["red", "green", "blue"]}
          />
        </div>
      </Paper>
    </Container>
  );
}

export default App;
