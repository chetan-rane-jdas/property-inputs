import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selected: {
      textOverflow: "ellipsis",
      overflow: "hidden"
    },
  })
)
