"use client"

import { useState } from 'react';
import MemeGallery from '../component/MemeGallery/MemeGallery';
import { getMemes } from '../utils/redditApi';
import styles from "./page.module.css"

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
      <h1>Meme Gallery</h1>
      <MemeGallery memes={memes} loadMoreMemes={loadMoreMemes} isLoading={isLoading} />
    </div>
  );
};

export default Home;
