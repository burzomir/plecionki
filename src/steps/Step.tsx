import { makeStyles, Typography } from "@material-ui/core";
import { PropsWithChildren } from "react";

type StepProps = {
  title: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    marginTop: theme.spacing(5),
  },
}));

export function Step({ title, children }: PropsWithChildren<StepProps>) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography variant="h5" align="center" className={styles.title}>
        {title}
      </Typography>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
