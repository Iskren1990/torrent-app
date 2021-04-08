import { useContext, useEffect, useRef } from 'react';
import { Switch, Route } from "react-router-dom";
import ReactNotify from 'react-notify';
import TosterContextStore from './context/TosterContextStore';
import UserContextStore from './context/UserContextStore';
import Loading from './components/common/Loading';

import styles from './App.module.css';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Home from './components/core/Home';
import NotFound from './components/core/NotFound';
import NavData from './utils/navigation';

function App() {

  const userData = useContext(UserContextStore);
  const { msg } = useContext(TosterContextStore);
  const msgCont = useRef(null);
  const navData = NavData(userData);

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
        <Loading />
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
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;