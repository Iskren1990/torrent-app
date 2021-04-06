import { useContext, useEffect, useRef } from 'react';
import { Switch, Route } from "react-router-dom";
import ReactNotify from 'react-notify';
import TosterContextStore from './TosterContextStore';

import styles from './App.module.css';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Home from './components/core/Home';
import navData from './utils/navigation';

function App() {
  const { msg } = useContext(TosterContextStore);
  const msgCont = useRef(null);
  useEffect(() => {
    msgCont.current.error("", msg, 4000)
  }, [msg])

  return (
    <div className={styles.App}>
      <div className={styles.NotifyItem}>
        <ReactNotify ref={msgCont} />
      </div>
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
