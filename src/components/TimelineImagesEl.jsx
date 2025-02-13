import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti"; // Import confetti library

function TimelineImagesEl({
  eventDate,
  event,
  eventDesc = "",
  images,
  isSpecial = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const modalRef = useRef(null); // Ref for the modal container

  const isLong = typeof eventDesc === "string" && eventDesc.length > 30;
  const truncatedText = isLong ? eventDesc.substring(0, 30) + "..." : eventDesc;

  const handleNoButtonClick = () => {
    setNoButtonClicks((prevClicks) => prevClicks + 1);
  };

  const handleYesButtonClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      window.open("https://youtu.be/6JHu3b-pbh8?t=20", "_blank");
    }, 1000);
  };

  const getButtonStyle = () => {
    const scale = 1 - noButtonClicks * 0.2;
    return {
      transform: `scale(${scale})`,
      display: noButtonClicks >= 4 ? "none" : "inline-block",
    };
  };

  // Close modal when clicking outside of the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false); // Close the modal
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

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
          <div className="modal-content" ref={modalRef}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2>{event}</h2>
            <p>{eventDesc}</p>
            {isSpecial && (
              <div className="modal-buttons">
                <button
                  className="modal-button modal-button-yes"
                  onClick={handleYesButtonClick}
                >
                  Да
                </button>
                <button
                  className="modal-button modal-button-no"
                  onClick={handleNoButtonClick}
                  style={getButtonStyle()}
                >
                  Нет
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TimelineImagesEl;