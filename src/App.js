import styles from './App.module.css';
import Weather from './components/common/Weather-widget';
import Video from './components/common/Video';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import Home from './components/core/Home';

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <main className={styles.ContentWrapper}>
        <Home></Home>
      {/* <Video></Video> */}
      {/* <Weather></Weather> */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App; 
