import { useEffect, useRef, useState } from "react";
import "./App.css";
import TimelineDateEl from "./components/TimelineDateEl";
import TimelineContent from "./components/TimelineContent";

function App() {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollableWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;

      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + containerWidth < scrollableWidth
      );
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -500, // Scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 500, // Scroll distance
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      const scrollableElement = scrollRef.current;
      const handleResize = () => checkScroll();

      scrollableElement.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", handleResize);

      // Initial check for scroll positions
      checkScroll();

      return () => {
        scrollableElement.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="timeline__main-grid">
          {canScrollLeft && (
            <button className="scroll-indicator left" onClick={scrollLeft}>
              ◀
            </button>
          )}
          <div className="timeline__main-inner-grid" ref={scrollRef}>
            <div className="timeline__elements-headings-container">
              <div className="timeline__main-line"></div>
              <TimelineDateEl eventDate={"2023"} />
              <TimelineDateEl eventDate={"2024"} />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <TimelineDateEl eventDate={"2025"} />
            </div>
            <TimelineContent />
          </div>
          {canScrollRight && (
            <button className="scroll-indicator right" onClick={scrollRight}>
              ▶
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
