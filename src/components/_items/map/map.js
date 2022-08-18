/* Map Yandex */

const map = document.querySelector('#map');

const whatToDo = document.querySelector('.what-to-do'); // блок "Что делать в городе?"

// Шаблон для клонирования
const balloonTemplate = document.querySelector('#balloon-template').content.querySelector('.balloon');
// Список элементов навигации
const navItems = whatToDo.querySelectorAll('.what-to-do-nav__item');

// Создание и заполнение данными баллуна
const createBalloon = (obj) => {
  const balloon = balloonTemplate.cloneNode(true);

  balloon.querySelector('.balloon__image').rsc = obj.photo_url;
  balloon.querySelector('.balloon__title').textContent = obj.title;
  balloon.querySelector('.balloon__desc-text').textContent = obj.desc;
  balloon.querySelector('.balloon__address-text').textContent = obj.address;

  return balloon.outerHTML;
};

if ( map ) {

  ymaps.ready(init);

  const center = [40.74521099740435,44.868688838134744];

  // Инициализация карты
  function init() {
    let map = new ymaps.Map("map", {
      center,
      zoom: 13,
      controls: ['routeButtonControl'],
      behaviours: ['drag'],
    });


      navItems.forEach((navItem) => {

        navItem.addEventListener('click', function () {
          navItems.forEach(item => item.classList.remove('js-active-mark'));
          map.geoObjects.removeAll();
          this.classList.add("js-active-mark");
          const dataType = this.dataset.type;

          customJson.forEach( (obj) => {

            if (obj.type === dataType) {

              let placemark = new ymaps.Placemark(obj.location, {
                balloonContent: createBalloon(obj),
              }, {
                iconLayout: 'default#image',
                iconImageHref: `./assets/img/map/${obj.mark_name}.svg`,
                iconImageSize: [49, 59],
                iconImageOffset: [0, -60],
                balloonPanelMaxMapArea: 1,
              });

              map.geoObjects.add(placemark);

            };
          });
        });
      });

    let clusterer = new ymaps.Clusterer({});
    map.geoObjects.add(clusterer);

  };

}

