/* Map Yandex */

{
  // блок "Что делать в городе?"
  const whatToDo = document.querySelector('.what-to-do');

  let map__item;
  let balloonTemplate;
  let navItems;

  if (whatToDo) {
    map__item = whatToDo.querySelector('.map__item');
    // Шаблон для клонирования
    balloonTemplate = whatToDo.querySelector('.balloon-template').content.querySelector('.balloon');
    // Список элементов навигации
    navItems = whatToDo.querySelectorAll('.what-to-do-nav__item');
  }


  // Создание и заполнение данными баллуна
  const createBalloon = ({photo_src, title, desc, address, link}) => {
    const balloon = balloonTemplate.cloneNode(true);

    balloon.querySelector('.balloon__image').src = photo_src;
    balloon.querySelector('.balloon__title').textContent = title;
    balloon.querySelector('.balloon__desc-text').textContent = desc;
    balloon.querySelector('.balloon__address-text').textContent = address;
    balloon.querySelector('.balloon__button').href = link;

    return balloon.outerHTML;
  };


  // Функция отрисовки меток на карте
  const renderMark = (navElems, arrObj) => {
    // Создание пустой коллекции геообъектов
    let geoObjects = new ymaps.GeoObjectCollection({});

    navElems.forEach(item => {
      if (item.classList.contains('js-active-mark')) {
        const dataType = item.dataset.type;

        arrObj.forEach(obj => {

          const balloonLayout = ymaps.templateLayoutFactory.createClass(createBalloon(obj), {

            build: function () {
              this.constructor.superclass.build.call(this);

              this._$element = $('.balloon', this.getParentElement());

              this._$element.find('.balloon__close')
                .on('click', $.proxy(this.onCloseClick, this));
            },

            clear: function () {
              this._$element.find('.balloon__close').off('click');

              this.constructor.superclass.clear.call(this);
            },
            //
            // Закрывает балун при клике на крестик
            onCloseClick: function (evt) {
              evt.preventDefault();
              this.events.fire('userclose');
            },

            // Используется для автопозиционирования
            getShape: function () {

              let position = this._$element.position();
              let width = this._$element.offsetWidth;
              let height = this._$element.offsetHeight;

              return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                [position.left, position.top], [
                  position.left + width,
                  position.top + height
                ]
              ]));
            },

          });

          // Баллун в виде панели при мобильном разрешении экрана
          if (window.matchMedia("(max-width: 580px)").matches) {
            map.options.set({balloonPanelMaxMapArea:'Infinity'}) ;
          }

          const {type, location, mark_name, mark_hover_name} = obj;

          if (type === dataType) {

            // Создание кастомных меток и баллунов
            const placemark = new ymaps.Placemark(location, {
              balloonContentBody: createBalloon(obj),
            }, {
              balloonLayout,
              hideIconOnBalloonOpen: false,
              iconLayout: 'default#image',
              iconImageHref: `./assets/img/map/${mark_name}.svg`,
              iconImageSize: [49, 59],
              iconImageOffset: [0, -60],
            });

            // смена иконки при hover
            placemark.events.add('mouseenter', (evt) => {
              evt.get('target').options.set('iconImageHref', `./assets/img/map/${mark_hover_name}.svg`)
            });
            placemark.events.add('mouseleave', (evt) => {
              evt.get('target').options.set('iconImageHref', `./assets/img/map/${mark_name}.svg`)
            });


            // Добавление метки в коллекцию
            geoObjects.add(placemark);
            // Добавление коллекции на карту
            map.geoObjects.add(geoObjects);
            // Установка масштаба для видимости всей коллекции
            map.setBounds(geoObjects.getBounds());
            // итоговый масштаб карты чуть меньше зоны видимости
            map.setZoom(map.getZoom() - 2);

            // Запрет зума
            // map.behaviors.disable('scrollZoom');
            // map.behaviors.disable('dblClickZoom');
            // map.behaviors.disable('multiTouch');

          }
        });
      };
    });
  };

  let map;

  if (map__item) {

    ymaps.ready(init);

    // Инициализация карты
    function init() {
      map = new ymaps.Map("map-index", {
          center: [40.74521099740435, 44.868688838134744],
          zoom: 13,
          controls: [],
        },

        { //ограничения области просмотра карты
          restrictMapArea: [
            [39.874858480470486, 42.27403199633786],
            [41.82876820666636, 47.54746949633786]
          ]
        });

      navItems.forEach((navItem) => {

        renderMark(navItems, customJson);

        function filterMark() {
          map.geoObjects.removeAll();
          navItems.forEach(item => item.classList.remove('js-active-mark'));
          navItem.classList.add('js-active-mark');
          renderMark(navItems, customJson);
        };

        navItem.addEventListener('click', filterMark);

      });

        let clusterer = new ymaps.Clusterer({});
        map.geoObjects.add(clusterer);

      };
    }

  }
