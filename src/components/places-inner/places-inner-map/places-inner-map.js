/* Map Yandex */

{
// places-inner
const placesInnerMap = document.querySelector('.places-inner-map__container');

let placesInnerMapItem;
let balloonTemplate;

if (placesInnerMap) {
  placesInnerMapItem = placesInnerMap.querySelector('.places-inner-map__item');
// Шаблон для клонирования
  balloonTemplate = placesInnerMap.querySelector('.balloon-template').content.querySelector('.balloon');
}

// Создание и заполнение данными баллуна
//   const createBalloon = ( { photo_url, title, desc, address } ) => {
//     const balloon = balloonTemplate.cloneNode(true);
//
//     balloon.querySelector('.balloon__image').rsc = photo_url;
//     balloon.querySelector('.balloon__title').textContent = title;
//     balloon.querySelector('.balloon__desc-text').textContent = desc;
//     balloon.querySelector('.balloon__address-text').textContent = address;
//
//     return balloon.outerHTML;
//   };

let map;

if ( placesInnerMapItem ) {

  ymaps.ready(init);

  // Инициализация карты
  function init() {
    map = new ymaps.Map("places-inner-map__item", {
        center: [40.74521099740435, 44.868688838134744],
        zoom: 13,
        controls: ['routeButtonControl'],
      },

      { //ограничения области просмотра карты
        restrictMapArea: [
          [39.874858480470486,42.27403199633786],
          [41.82876820666636,47.54746949633786]
        ]
      });

    let clusterer = new ymaps.Clusterer({});
    map.geoObjects.add(clusterer);

  };
}

  }
