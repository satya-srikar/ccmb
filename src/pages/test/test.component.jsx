import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./test.styles";

class TestPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={`test-page ${classes.root}`}>
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          variant="outlined"
        />
      </div>
    );
  }
}

export default withStyles(useStyles)(TestPage);
