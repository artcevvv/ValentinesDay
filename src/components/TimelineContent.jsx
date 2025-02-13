import React from "react";

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
  FirstTimeAsLovers,
  Zarechnoye,
  OlderDay,
  LastInSummer,
  FirstMeeting,
  SecondMeeting,
  KinoRoomPt1,
  SAT,
  Weekend,
  NewYear2024,
  current2025,
} from "../assets/text/text";
import TimelineImagesEl from "./TimelineImagesEl";

import photo1 from "../assets/images/photos/photo1.jpg";
import photo2 from "../assets/images/photos/photo2.jpg";

function TimelineContent() {
  const images = [photo1, photo2];

  return (
    <div className="timeline__elements-images-outer-container">
      <div className="timeline__element-images-container">
        <TimelineImagesEl
          event={"День учителя"}
          eventDate={"5 ноября"}
          eventDesc={TeachersDayDesc}
          images={images}
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
          event={"Парк победы и тучи"}
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
        <TimelineImagesEl
          event={"День, что изменил нас"}
          eventDate={"4 июля"}
          eventDesc={Home}
        />
        <TimelineImagesEl
          event={"Впервые как пара"}
          eventDate={"7 июля"}
          eventDesc={FirstTimeAsLovers}
        />
        <TimelineImagesEl
          event={"Заречное II"}
          eventDate={"26 июля"}
          eventDesc={Zarechnoye}
        />
      </div>
      <div className="timeline__element-images-container">
        <TimelineImagesEl
          event={"Пожилые мы"}
          eventDate={"27 июля"}
          eventDesc={OlderDay}
        />
        <TimelineImagesEl
          event={"Последний день лета"}
          eventDate={"2 августа"}
          eventDesc={LastInSummer}
        />
        <TimelineImagesEl
          event={"Встреча после разлуки"}
          eventDate={"7 сентября"}
          eventDesc={FirstMeeting}
        />
      </div>
      <div className="timeline__element-images-container">
        <TimelineImagesEl
          event={"Второй приезд"}
          eventDate={"21 сентября"}
          eventDesc={SecondMeeting}
        />
        <TimelineImagesEl
          event={"День рождения"}
          eventDate={"13 октября"}
          eventDesc={KinoRoomPt1}
        />
        <TimelineImagesEl
          event={"Фотобутка"}
          eventDate={"2-3 ноября"}
          eventDesc={SAT}
        />
      </div>
      <div className="timeline__element-images-container">
        <TimelineImagesEl
          event={"Каникулы"}
          eventDate={"19 ноября - 7 декабря"}
          eventDesc={Weekend}
        />
        <TimelineImagesEl
          event={"Новый год"}
          eventDate={"29 декабря"}
          eventDesc={NewYear2024}
        />
      </div>
      <div className="timeline__element-images-container timeline__element-images-container_special">
        <TimelineImagesEl
          event={"L0V3"}
          eventDate={"Текущее время"}
          eventDesc={current2025}
          isSpecial={true}
        />
      </div>
    </div>
  );
}

export default TimelineContent;
