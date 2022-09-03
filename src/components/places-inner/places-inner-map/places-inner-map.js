/* Map Yandex */

{

  // Контент для заполнения баллунов
  const Json = [
    {
      mark_name: "mark-hotel",
      mark_hover_name: "mark-hotel-black",
      photo_url: "./assets/img/map/01.jpg",
      title: "Техут",
      desc: 'На перекрестке Дилижана и Иджевана',
      address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
      location: [40.75326541732117, 44.88379503930662],
    },

  ];

 // Вводные данные для заполнения
  const mapData = {
    // класс блока-обертки, внутри которого находится карта
    wrapperMapClass: '.places-inner-map__wrapper',
    // класс блока с картой
    mapClass: '.places-inner-map__item',
    // id карты
    mapId: 'places-inner-map__item',
  };


  createMapMark (mapData, Json)

}


