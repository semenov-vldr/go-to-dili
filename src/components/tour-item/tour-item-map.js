/* Map Yandex */

{
  const tourItem = document.querySelector('.tour-item__map-wrapper');


  let map;

  if (tourItem) {

    ymaps.ready(init);

    // Инициализация карты
    function init() {
      map = new ymaps.Map("tour-item__map", {
          center: [40.74521099740435, 44.868688838134744],
          zoom: 13,
          controls: ['routeButtonControl'],
        },

        { //ограничения области просмотра карты
          restrictMapArea: [
            [39.874858480470486, 42.27403199633786],
            [41.82876820666636, 47.54746949633786]
          ]
        });

      let clusterer = new ymaps.Clusterer({});
      map.geoObjects.add(clusterer);

    };
  }

 }
