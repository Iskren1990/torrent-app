// import { useContext } from 'react';

import styles from './App.module.css';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Home from './components/core/Home';
import { Switch, Route } from "react-router-dom";
import navData from './utils/navigation';

function App() {

  return (
    <div className={styles.App}>
      <Header></Header>
      <main className={styles.ContentWrapper}>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          {
            Object.keys(navData)
              .map(key =>
                <Route
                  key={navData[key]}
                  exact
                  path={navData[key].path}
                  component={navData[key].component}
                ></Route>
              )
          }
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
