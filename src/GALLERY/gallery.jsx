
import Header from '../components/common/Header/Header';
import gallery from "./gallery.json";
import "./gallery.css";

function Gallery() {
  return (
    <>
    <Header/>
    <div className="gallery-grid">
       {
        gallery.images.map((image,index)=>(
            <div className="gallery-image" key={index}>
            <img src={image} alt="traveller"  loading='lazy'/>
          </div>
        ))
       }
    </div>
    </>
  );
}

export default Gallery;