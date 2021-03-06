import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(lastUpdate);
  if (!confirmed) {
    return "loading..";
  }
  return (
    <div className={styles.container}>
      <h3 className={styles.date}>
        Latest of Date: {new Date(lastUpdate).toLocaleDateString()}
      </h3>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <h1>Infected</h1>
            </Typography>
            <Typography variant="h5">
              <h1 className={styles.numbers1}>
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </h1>
            </Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="body2">
              <h2>Total cases of COVID-19</h2>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <h1>Recovered</h1>
            </Typography>
            <Typography variant="h5">
              <h1 className={styles.numbers2}>
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </h1>
            </Typography>
            <Typography color="textSecondary"></Typography>{" "}
            <Typography variant="body2">
              <h2>Recoveries from COVID-19</h2>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <h1>Deaths</h1>
            </Typography>
            <Typography variant="h5">
              <h1 className={styles.numbers3}>
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </h1>
            </Typography>
            <Typography color="textSecondary"></Typography>{" "}
            <Typography variant="body2">
              <h2>Deaths from COVID-19</h2>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
