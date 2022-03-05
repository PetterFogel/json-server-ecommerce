import { FC } from "react";
import classes from "./AboutScreen.module.css";

export const About: FC = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>About</h2>
      <p>
        This is e-commerce project created with React, TypeScript and
        json-server package to fetch and manage api calls with redux-toolkit.
        <br />
        <br />
        Run `npm start` to run the application.
        <br />
        <br />
        Run `npm run start-db` to start the json server.
      </p>
    </section>
  );
};
