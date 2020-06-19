import React from "react";
import Cards from "./components/Cards/Cards";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>COVID-19 TRACKER</h1>
        <h3 className={styles.subHeading}>REACT WEB APP</h3>
        <Cards data={data} />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
