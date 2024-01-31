import { useEffect, useRef, useCallback } from 'react';
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import styles from './MemeGallery.module.css';

const MemeGallery = ({ memes, loadMoreMemes, isLoading }) => {
  const observer = useRef();

  const lastMemeRef = useCallback(node => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMoreMemes();
      }
    });

    if (node) observer.current.observe(node);
  }, [isLoading, loadMoreMemes]);

  useEffect(() => {
    // Fetch memes when component mounts
    loadMoreMemes();
  }, []); // Run only once when component mounts

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#my-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
      padding: { top: 20, bottom: 40, left: 100, right: 100 }
    });
    lightbox.init();
  }, []); // Run only once when component mounts

  return (
    <div >
       <div className="pswp-gallery"  id="my-gallery">
        {memes.map((meme, index) => (
            <a 
              key={index} 
              className={styles.memeItem}
              href={meme.imageUrl} 
              data-pswp-width={meme.Wt} 
              data-pswp-height={meme.Ht} 
              target="_blank"
              ref={index === memes.length - 1 ? lastMemeRef : null} // Reference to the last meme
            >
              <img src={meme.thumbnail} alt={meme.title} />
            </a>
          
        ))}
      </div>
      {isLoading && <div className={styles.loader}>Loading...</div>}
    </div> 
  );
};

export default MemeGallery;


