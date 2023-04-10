import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    width: "100%",
  },
}));

const ChatGreeter = ({ name }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Hello {name}!
      </Typography>
      <Typography component="p">
        Welcome to Multilingual Chat. Your messages will be automatically
        translated to all users. Feel free to use you native tongue.
      </Typography>
    </Paper>
  );
};

ChatGreeter.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ChatGreeter;
