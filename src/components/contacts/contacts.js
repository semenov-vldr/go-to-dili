/* Map Yandex */

{

  // Контент для заполнения баллунов
  const Json = [
    {
      mark_name: "mark-logo",
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
    wrapperMapClass: '.contacts__map-wrapper',
    // класс блока с картой
    mapClass: '.contacts__map',
    // id карты
    mapId: 'contacts__map',
  };


  createMapMark (mapData, Json)

}


