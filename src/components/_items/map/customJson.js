const customJson = [
  // ----------------Eat (Еда)----------------
  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "./assets/img/events/06.jpg",
    title: "Dilijazz Restaurant 1",
    desc: 'Средиземноморская, Американска, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75826541732117, 44.88379503930662],
    link: '',
  },

  {
    type: "eat",
    mark_name: "mark-eat",
    mark_hover_name: "mark-eat-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Dilijazz Restaurant 2",
    desc: 'Средиземноморская, Европейская',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.751999618091304, 44.87363867944334],
    link: '',
  },

  // ----------------Hotel (Отели)----------------
  {
    type: "hotel",
    mark_name: "mark-hotel",
    mark_hover_name: "mark-hotel-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Hilton",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75740056093835,44.88809144458006],
    link: '',
  },

  {
    type: "hotel",
    mark_name: "mark-hotel",
    mark_hover_name: "mark-hotel-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Mriya",
    desc: 'Описание отеля',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.75217903445399,44.90439927539061],
    link: '',
  },

  // ----------------Route (Маршруты)----------------
  {
    type: "route",
    mark_name: "mark-route",
    mark_hover_name: "mark-route-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Маршрут 1",
    desc: 'По лесу',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.74525987533819,44.85084092578122],
    link: '',
  },

  {
    type: "route",
    mark_name: "mark-route",
    mark_hover_name: "mark-route-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Маршрут 2",
    desc: 'В горы',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.73638417553341,44.86307759338689],
    link: '',
  },

  // ----------------Place (Места)----------------
  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "http://img.tourister.ru/files/2/4/6/3/1/6/6/4/original.jpg",
    title: "Городской парк и искусственное озеро",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.739400, 44.864129],
    link: 'city-park-and-artificial-lake.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://avatars.dzeninfra.ru/get-zen_doc/1626348/pub_5cbb3fbf1c8e87021bb86ee2_5cbb4c2b953d9400b3f9eabb/scale_2400",
    title: "Улица ремесленников и старый город",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.739496, 44.868773],
    link: 'craftsmen-street.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://core-pht-proxy.maps.yandex.ru/v1/photos/download?photo_id=TNrnW7fJO5GAeXUZ_wy9pA&image_size=X5L",
    title: "Улочки Дилижана и возрождение традиций",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.746417, 44.875753],
    link: 'streets-of-dilijan.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "http://img.tourister.ru/files/2/4/6/3/1/6/2/7/original.jpeg",
    title: "Центр города и советское наследие",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.742288, 44.871412],
    link: 'city-center.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://cdn-ynd-nav.technolab.com.ru/file/5cf7ebed1946a10018d636cc",
    title: "Краеведческий музей и картинная галерея Дилижана",
    desc: 'Описание',
    address: 'ул. Мясникяна, 28, Дилижан, Армения',
    location: [40.738813, 44.866919],
    link: 'local-history-museum.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://armeniaplanet.com/Content/Img/Creative/ashot-babayan-wood-art/2.jpg",
    title: "Музей-мастерская Ашота Бабаяна",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737881, 44.866438],
    link: 'museum-master-ashota-babayana.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://hyurservice.com/images/attractions/1/16119507516509/hqdefault.jpeg",
    title: "BuduArt",
    desc: 'Описание',
    address: 'ул. Мясникяна, 34, Дилижан, Армения',
    location: [40.738698, 44.866922],
    link: 'buduart.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://photos.wikimapia.org/p/00/02/40/09/90_big.jpg",
    title: "Экскурсия по Музею денег",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.748459, 44.865947],
    link: 'museum-of-money.html',
  },

  {
    type: "place",
    mark_name: "mark-place",
    mark_hover_name: "mark-place-black",
    photo_src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c1/56/09/dilijan-amphitheater.jpg?w=1200&h=-1&s=1",
    title: "«Ротонда» и новый амфитеатр",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.743467, 44.870740],
    link: 'rotunda-and-new-amphitheater.html',
  },


  // -------Event (События)----------------
  {
    type: "event",
    mark_name: "mark-event",
    mark_hover_name: "mark-event-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Событие 1",
    desc: 'Праздник',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.78833239918575,44.94719166809392],
    link: '',
  },

  {
    type: "event",
    mark_name: "mark-event",
    mark_hover_name: "mark-event-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Событие 2",
    desc: 'Новый год',
    address: '1/1 2nd St., T’eghut, Дилижан 3902 Армения',
    location: [40.7778938307187,44.945475054324405],
    link: '',
  },


  // ----------------Culture (Культура)----------------
  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "http://img.tourister.ru/files/2/4/6/3/1/5/9/8/original.jpeg",
    title: "Монумент в честь 50-летия Советской Армении",
    desc: 'Описание',
    address: 'Тбилисское шоссе/ул. Саят-Новы, Дилижан, Армения',
    location: [40.741477, 44.867013],
    link: '50th-anniversary-of-soviet- armenia.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://s00.yaplakal.com/pics/pics_preview/1/6/3/11464361.jpg",
    title: "Памятник героям фильма «Мимино»",
    desc: 'Описание',
    address: 'улица Эмма Цатурян, Дилижан, Армения',
    location: [40.740352, 44.865363],
    link: 'mimino.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "http://www.armeniatur.am/d_images/2008-10-17_14-10_DSC03865_2.jpg",
    title: "Памятник воинам ВОВ",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.850869],
    link: 'monument-to-the-soldiers-of-the-great-patriotic-war.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://sun9-21.userapi.com/impg/bit4pc5YISEu-JXjiPKS9qMzkCz77QT01UECuw/IhBsE8u6WhU.jpg?size=810x540&quality=96&sign=afde3297efab5a988a75518aae91528d&type=album",
    title: "«Армения» по подобию богини Анаит",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.830569],
    link: 'armenia-in-the-likeness-of-the-goddess-anahit.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/c1/56/09/dilijan-amphitheater.jpg?w=1200&h=-1&s=1",
    title: "«Ротонда» и новый амфитеатр",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.750569],
    link: 'rotunda-and-new-amphitheater.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "./assets/img/map/01.jpg",
    title: "Родник Матинова",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.737327, 44.720569],
    link: 'spring-matinova.html',
  },

  {
    type: "culture",
    mark_name: "mark-monument",
    mark_hover_name: "mark-monument-black",
    photo_src: "https://www.abandonedspaces.com/wp-content/uploads/sites/58/2019/11/soghomon-matevosyan-cc-by-sa-4-0-h.jpg",
    title: "Царь леса",
    desc: 'Описание',
    address: 'Тавушская область, Дилижан, Армения',
    location: [40.787327, 44.720569],
    link: 'king-of-the-forest.html',
  },

];


