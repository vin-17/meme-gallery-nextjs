import { Fragment, useEffect } from 'react';
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";



const MemeGallery = ({ memes, loadMoreMemes, isLoading }) => {

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
    <Fragment>
       <div className="pswp-gallery" id="my-gallery">
        {memes.map((meme, index) => (
            <a key = {index} href={meme.imageUrl} data-pswp-width={meme.Wt} data-pswp-height={meme.Ht} target="_blank"
            >
              <img src={meme.thumbnail} alt={meme.title} />
            </a>
          
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div className="load-more" onClick={loadMoreMemes}>
          Load More
        </div>
      )}

    </Fragment> 
  );
};

export default MemeGallery;

