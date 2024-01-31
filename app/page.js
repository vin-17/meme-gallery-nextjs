"use client"

import { useState } from 'react';
import MemeGallery from '../component/MemeGallery/MemeGallery';
import { getMemes } from '../utils/redditApi';
import styles from "./page.module.css"
import Navbar from "../component/Navbar/Navbar"

const Home = () => {
  const [memes, setMemes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreMemes = async () => {
    setIsLoading(true);
    const newMemes = await getMemes(memes[memes.length - 1]?.id);
    setMemes([...memes, ...newMemes]);
    setIsLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.memeGallery}>
        <MemeGallery memes={memes} loadMoreMemes={loadMoreMemes} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Home;

