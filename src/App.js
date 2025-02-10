import { useEffect, useRef, useState } from "react";
import "./App.css";
import TimelineDateEl from "./components/TimelineDateEl";
import TimelineImagesEl from "./components/TimelineImagesEl";

import {
  TeachersDayDesc,
  LongSpeechDayDesc,
  NewYear2023,
  JanToApr2024,
  AfterGym,
  FirstDate,
  SecondDate,
  ThirdDate,
  Picnic,
  Bracelets,
  Hospital,
  Bridge,
  Home,
} from "./assets/text/text";

function App() {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
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
          {canScrollLeft && <div className="scroll-indicator left">◀</div>}
          <div className="timeline__main-inner-grid" ref={scrollRef}>
            <div className="timeline__elements-headings-container">
              <div className="timeline__main-line"></div>
              <TimelineDateEl eventDate={"2023"} />
              <TimelineDateEl eventDate={"2024"} />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <TimelineDateEl eventDate={"qwer"} />
            </div>
            <div className="timeline__elements-images-outer-container">
              <div className="timeline__element-images-container">
                <TimelineImagesEl
                  event={"День учителя"}
                  eventDate={"5 ноября"}
                  eventDesc={TeachersDayDesc}
                />
                <TimelineImagesEl
                  event={"Первая долгая переписка"}
                  eventDate={"17 ноября"}
                  eventDesc={LongSpeechDayDesc}
                />
                <TimelineImagesEl
                  event={"Новый Год"}
                  eventDate={"31 декабря"}
                  eventDesc={NewYear2023}
                />
              </div>
              <div className="timeline__element-images-container">
                <TimelineImagesEl
                  event={"Медленно, но верно"}
                  eventDate={"С января по апрель"}
                  eventDesc={JanToApr2024}
                />
                <TimelineImagesEl
                  event={"Прогулки после зала"}
                  eventDate={"18 апреля"}
                  eventDesc={AfterGym}
                />
                <TimelineImagesEl
                  event={"Прогулка по ебеням"}
                  eventDate={"21 апреля"}
                  eventDesc={FirstDate}
                />
              </div>
              <div className="timeline__element-images-container">
                <TimelineImagesEl
                  event={"Парк победы, тучи и ливень"}
                  eventDate={"28 апреля"}
                  eventDesc={SecondDate}
                />
                <TimelineImagesEl
                  event={"Собака, вода и бублики"}
                  eventDate={"12 мая"}
                  eventDesc={ThirdDate}
                />
                <TimelineImagesEl
                  event={"Пикник"}
                  eventDate={"18 мая"}
                  eventDesc={Picnic}
                />
              </div>
              <div className="timeline__element-images-container">
                <TimelineImagesEl
                  event={"Браслеты"}
                  eventDate={"6 июня"}
                  eventDesc={Bracelets}
                />
                <TimelineImagesEl
                  event={"Больница и выписка"}
                  eventDate={"13 июня - 20 июня"}
                  eventDesc={Hospital}
                />
                <TimelineImagesEl
                  event={"Мост"}
                  eventDate={"3 июля"}
                  eventDesc={Bridge}
                />
              </div>
              <div className="timeline__element-images-container">
                <TimelineImagesEl event={"День, что изменил мир"} eventDate={"4 июля"} eventDesc={Home} />
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
              </div>
              <div className="timeline__element-images-container">
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
              </div>
              <div className="timeline__element-images-container">
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
                <TimelineImagesEl event={"Event"} eventDesc={"Desc"} />
              </div>
            </div>
          </div>
          {canScrollRight && <div className="scroll-indicator right">▶</div>}
        </div>
      )}
    </div>
  );
}

export default App;
