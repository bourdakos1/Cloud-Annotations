/*
 * Copyright (c) International Business Machines
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core";

const appBarHeight = 64;
// const leftPanelWidth = 256;
const leftPanelWidth = 240;
const divider = 1;

interface Props {
  header: JSX.Element;
  left: JSX.Element;
  main: JSX.Element;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: appBarHeight,
    },
    divider: {
      position: "absolute",
      top: appBarHeight,
      left: 0,
      right: 0,
      height: 0,
      border: 0,
      borderTopWidth: divider,
      borderTopStyle: "solid",
      borderTopColor: theme.palette.grey[900],
      margin: 0,
    },
    left: {
      position: "absolute",
      top: appBarHeight + divider,
      left: 0,
      width: leftPanelWidth,
      bottom: 0,
    },
    main: {
      position: "absolute",
      top: appBarHeight + divider,
      left: leftPanelWidth,
      right: 0,
      bottom: 0,
    },
  })
);

function Layout({ header, left, main }: Props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <header className={classes.header}>{header}</header>
      <hr className={classes.divider} />
      <div className={classes.left}>{left}</div>
      <main className={classes.main}>{main}</main>
    </React.Fragment>
  );
}

export default Layout;
