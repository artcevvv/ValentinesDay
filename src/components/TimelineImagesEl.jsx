import React, { useState } from "react";
import Gallery from "./Gallery";
import Slider from "./Slider";

function TimelineImagesEl({ eventDate, event, eventDesc = "", images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLong = typeof eventDesc === "string" && eventDesc.length > 40;
  const truncatedText = isLong ? eventDesc.substring(0, 40) + "..." : eventDesc;

  return (
    <div className="timeline__images-inner">
      <h1 className="timeline__images-title">{event}</h1>
      <span className="timeline__images-date">{eventDate}</span>
      <span className="timeline__images-excerpt">{truncatedText}</span>
      {isLong && (
        <button className="read-more-btn" onClick={() => setIsModalOpen(true)}>
          Продолжение тут ♡
        </button>
      )}
      {isModalOpen && (
        <div className="modal fade-in">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2>{event}</h2>
            <p>{eventDesc}</p>
            <Slider images={images}/>

            {/* <div className="modal-images"> */}
            {/* {images.map((img, index) => (
              <img key={index} src={img} alt={`Event ${index}`} />
            ))} */}
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default TimelineImagesEl;
