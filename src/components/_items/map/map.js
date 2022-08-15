/* Map Yandex */

const map = document.querySelector('#map');

if ( map ) {

  ymaps.ready(init);

  const center = [40.74521099740435,44.868688838134744];

  const getBalloon = ( {url, title, kitchen_name, address} ) => {
    return `
    <div class="balloon">
        <div class="balloon__wrapper">
            <div class="balloon__close">X</div>
            <div class="balloon__image-wrapper">
                <img class="balloon__image" src="${url}" alt="">
            </div>
            <div class="balloon__content-text">
                <p class="balloon__title">${title}</p>

                <div class="balloon__kitchen">
                    <span class="balloon__kitchen-title">Кухня:</span>
                    <div class="balloon__kitchen-list">
                        <span class="balloon__kitchen-name">${kitchen_name}</span>
                    </div>
                </div>
                <p class="balloon__address">
                    <img src="./assets/img/map/ballon-location.svg" alt="">
                    ${address}
                </p>
            </div>
        </div>
    </div>`;
  };


  function init() {
    let map = new ymaps.Map("map", {
      center,
      zoom: 13,
      controls: ['routeButtonControl'],
      behaviours: ['drag'],
    });


    // Формирование баллунов по данным из массива объектов
    const renderMarks = (array) => {
      array.forEach( (obj) => {

        let placemark = new ymaps.Placemark([obj.lat, obj.long], {
          balloonContent: getBalloon(obj),
        }, {
          iconLayout: 'default#image',
          iconImageHref: `./assets/img/map/${obj.name_icon}.svg`,
          iconImageSize: [49, 59],
          iconImageOffset: [0, -60],
        });
        map.geoObjects.add(placemark);
      });
      let clusterer = new ymaps.Clusterer({});
      map.geoObjects.add(clusterer);
    };

    renderMarks (restaurants);




    const navItems = whatToDo.querySelectorAll('.what-to-do-nav__item'); // Все элементы навигации
    const navItem_eat = whatToDo.querySelector('.nav-item-eat');     // Еда
    const navItem_hotel = whatToDo.querySelector('.nav-item-hotel'); // Отели
    const navItem_route = whatToDo.querySelector('.nav-item-route'); // Маршруты
    const navItem_place = whatToDo.querySelector('.nav-item-place'); // Места
    const navItem_event = whatToDo.querySelector('.nav-item-event'); // События


    // Добавление активного класса для элемента навигации и отрисовка нужных меток
    function itemActive (item, array) {
      item.addEventListener('click', function() {
        if (this.classList.contains('js-active-mark')) {
          navItems.forEach(item => item.classList.remove('js-active-mark'));
          map.geoObjects.removeAll();
          this.classList.add('js-active-mark');
          renderMarks (array);
        };
      });
    };

    // В аргумент функции добавляем название элемента навигации и массив данных для меток
    itemActive ( navItem_eat, restaurants);
    itemActive ( navItem_hotel, hotels);
    itemActive ( navItem_route, routes);
    itemActive ( navItem_place, routes);
    itemActive ( navItem_event, routes);

  };


}

