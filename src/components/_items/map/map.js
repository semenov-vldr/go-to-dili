/* Map Yandex */


const map__item = document.querySelector('#map');

const whatToDo = document.querySelector('.what-to-do'); // блок "Что делать в городе?"

// Шаблон для клонирования
const balloonTemplate = document.querySelector('#balloon-template').content.querySelector('.balloon');
// Список элементов навигации
const navItems = whatToDo.querySelectorAll('.what-to-do-nav__item');

// Создание и заполнение данными баллуна
const createBalloon = ( { photo_url, title, desc, address } ) => {
  const balloon = balloonTemplate.cloneNode(true);

  balloon.querySelector('.balloon__image').rsc = photo_url;
  balloon.querySelector('.balloon__title').textContent = title;
  balloon.querySelector('.balloon__desc-text').textContent = desc;
  balloon.querySelector('.balloon__address-text').textContent = address;

  return balloon.outerHTML;
};

let map;

// Отрисовка меток на карте
const renderMark = (navElems, arrObj) => {
  let dataType;

  navElems.forEach(item => {
    if ( item.classList.contains('js-active-mark') ) {
      dataType = item.dataset.type;

      arrObj.forEach(obj => {
        if (obj.type === dataType) {

          let placemark = new ymaps.Placemark(obj.location, {
            balloonContent: createBalloon(obj),
          }, {
            iconLayout: 'default#image',
            iconImageHref: `./assets/img/map/${obj.mark_name}.svg`,
            iconImageSize: [49, 59],
            iconImageOffset: [0, -60],
          });

          map.geoObjects.add(placemark);

        }
      })
    };
  })
};



if ( map__item ) {

  ymaps.ready(init);
  const center = [40.74521099740435,44.868688838134744];

  // Инициализация карты
  function init() {
    map = new ymaps.Map("map", {
      center,
      zoom: 13,
      controls: ['routeButtonControl'],
    },

    { //ограничения области просмотра карты
      restrictMapArea: [
        [39.874858480470486,42.27403199633786],
        [41.82876820666636,47.54746949633786]
      ]
    });


      navItems.forEach((navItem) => {

        renderMark(navItems, customJson);

        navItem.addEventListener('click', () => {
          map.geoObjects.removeAll();
          navItems.forEach(item => item.classList.remove('js-active-mark'));
          navItem.classList.add('js-active-mark');
          renderMark(navItems, customJson);
        })
      });

    let clusterer = new ymaps.Clusterer({});
    map.geoObjects.add(clusterer);

  };

}

