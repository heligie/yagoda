function init(ymaps) {
  const map = new ymaps.Map('map', {
    center: [59.91337, 30.33139],
    zoom: 15
  });

  const placemark = new ymaps.Placemark([59.91337, 30.33139], {
    balloonContentHeader: 'Ягода',
    balloonContentBody: 'Набережная Обводного канала, 101',
    balloonContentFooter: 'Санкт-Петербург'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/map-marker.svg',
    iconImageSize: [14, 22],
    iconImageOffset: [-10, -20]
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
}
