function createMapMark ( { wrapperMapClass, mapClass, mapId }, Json ) {

  const wrapper = document.querySelector(wrapperMapClass);

  let mapItem;
  let balloonTemplate;

  if (wrapper) {
      // Шаблон для клонирования
      balloonTemplate = document.querySelector('.balloon-template').content.querySelector('.balloon');
      mapItem = wrapper.querySelector(mapClass);
  }

    // Создание и заполнение данными баллуна
    const createBalloon = ( { photo_url, title, desc, address } ) => {
      const balloon = balloonTemplate.cloneNode(true);

      balloon.querySelector('.balloon__image').rsc = photo_url;
      balloon.querySelector('.balloon__title').textContent = title;
      balloon.querySelector('.balloon__desc-text').textContent = desc;
      balloon.querySelector('.balloon__address-text').textContent = address;

      return balloon.outerHTML;
    };

    // Функция отрисовки меток на карте
    const renderMark = (arrObj) => {
      // Создание пустой коллекции геообъектов
      let geoObjects = new ymaps.GeoObjectCollection();


          arrObj.forEach(obj => {

            const balloonLayout = ymaps.templateLayoutFactory.createClass (createBalloon(obj), {

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

              // Закрывает балун при клике на крестик
              onCloseClick: function (evt) {
                evt.preventDefault();
                this.events.fire('userclose');
              },

              // Используется для автопозиционирования
              getShape: function () {
                // if(!this._isElement(this._$element)) {
                //   return balloonLayout.superclass.getShape.call(this);
                // }
                const position = this._$element.position();
                const width = this._$element.offsetWidth;
                const height = this._$element.offsetHeight;

                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                  [position.left, position.top],
                    [position.left + width,
                    position.top + height]
                ]));
              },

            });

            // Баллун в виде панели при мобильном разрешении экрана
            if (window.matchMedia("(max-width: 580px)").matches) {
              map.options.set({balloonPanelMaxMapArea:'Infinity'}) ;
            }

            const { location, mark_name, mark_hover_name } = obj;

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
              map.setZoom(map.getZoom() - 5);

          });
    };

  let map;

  if ( mapItem ) {

    ymaps.ready(init);

    // Инициализация карты
    function init() {
      map = new ymaps.Map(mapId, {
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

        renderMark(Json);

      let clusterer = new ymaps.Clusterer();
      map.geoObjects.add(clusterer);

    };
  };

}

