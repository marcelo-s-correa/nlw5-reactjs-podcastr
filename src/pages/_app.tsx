import Header from '../components/Header';
import Player from '../components/Player';

import '../styles/global.scss';

import styles from '../styles/app.module.scss';
import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {

  const [episodeList, setEpisodelist] = useState([]);
  const [currentEpisodeindex, setCurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodelist([episode]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider value={{ episodeList: [], currentEpisodeIndex: 0, play }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
