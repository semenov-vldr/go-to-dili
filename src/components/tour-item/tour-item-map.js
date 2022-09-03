/* Map Yandex */

{

  const Json = [
    {
      mark_name: "mark-logo",
      mark_hover_name: "mark-logo-black",
      photo_url: "./assets/img/map/01.jpg",
      title: "Техут",
      desc: 'Поход за грибами',
      address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
      location: [40.75326541732117, 44.88379503930662],
    },

  ];


  const mapData = {
    // класс блока-обертки, внутри которого находится карта
    wrapperMapClass: '.tour-item__map-sticky',
    // класс блока с картой
    mapClass: '.tour-item__map',
    // id карты
    mapId: 'tour-item__map',
  };

  createMapMark (mapData, Json)

}
