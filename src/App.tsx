import { ReactComponent as Pattern1 } from "./patterns/pattern-1.svg";
import { ReactComponent as Pattern2 } from "./patterns/pattern-2.svg";
import { Pattern } from "./patterns/Pattern";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const styles = useStyles();
  return (
    <Container className={styles.root}>
      <Paper>
        <Pattern PatternSource={Pattern1} colors={["red", "green", "blue"]} />
        <Pattern PatternSource={Pattern2} colors={["cornflowerblue"]} />
      </Paper>
    </Container>
  );
}

export default App;
