'use strict'
var body = document.body;
var titles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var typeOfHouse = ['flat', 'house', 'bungalo'];
var featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var checkTime = ['12:00', '13.00', '14.00'];
var map = document.body.querySelector('.tokyo__pin-map');
var dialogPanelTemplate = document.getElementById('lodge-template').content;
var originalDialogPanel = body.querySelector('.dialog__panel');
var offerDialog = originalDialogPanel.parentNode;
var dialogTitle = body.querySelector('.dialog__title');
var avatarImg = dialogTitle.querySelector('img');
var random = function (min, max) {
  return Math.round(Math.random() * (max - min) + (min));
};


var adverts = [];
var genElement = function (n) {
  var x = random(300, 900);
  var y = random(100, 500);
  var randomFeaturesLength = function () {
    var featuresArrcopy = featuresArr.slice();
    var counter = random(0, featuresArrcopy.length);
    for (; counter > 0; counter--) {
      featuresArrcopy.splice(random(0, featuresArrcopy.length - 1), 1);
    }
    return featuresArrcopy;
  };
  var advertElement = {
    'author': {
      'avatar': 'img/avatars/user0' + n + '.png'
    },
    'offer': {
      'title': titles[random(0, titles.length - 1)],
      'address': x + ',' + y,
      'price': random(1000, 1000000),
      'type': {
        'flat': 'Квартира',
        'house': 'Дом',
        'bungalo': 'Бунгало'
      },
      'rooms': random(1, 5),
      'guests': random(1, 10),
      'checkin': checkTime[random(0, checkTime.length - 1)],
      'checkout': checkTime[random(0, checkTime.length - 1)],
      'features': randomFeaturesLength(),
      'description': '',
      'photos': []
    },
    'location': {
      'x': x,
      'y': y
    }
  };
  return advertElement;
};
for (var i = 1; i < 9; i++) {
  adverts.push(genElement(i));
}


var renderPin = function (advert) {
  var pinTemplate = map.querySelector('.pin').cloneNode(true);
  pinTemplate.classList.remove('pin__main');
  pinTemplate.style = 'left:' + (advert.location.x - 20) + 'px; top:' + (advert.location.y - 20) + 'px';
  pinTemplate.querySelector('img').src = advert.author.avatar;
  return pinTemplate;
};
var createPinsFragment = function () {
  var renderedAllPins = document.createDocumentFragment();
  for (var a = 0; a < adverts.length; a++) {
    renderedAllPins.appendChild(renderPin(adverts[a]));
  }
  return renderedAllPins;
};
map.appendChild(createPinsFragment());


var renderDialogPanel = function (advertElem) {
  var featuresList = document.createDocumentFragment();
  for (var s = 0; s < advertElem.offer.features.length - 1; s++) {
    var featureSpan = document.createElement('span');
    featureSpan.className = 'feature__image + feature__image--' + advertElem.offer.features[s];
    featuresList.appendChild(featureSpan);
  }
  var dialogPanelTemplateCopy = dialogPanelTemplate.cloneNode(true);
  dialogPanelTemplateCopy.querySelector('.lodge__title').textContent = advertElem.offer.title;
  dialogPanelTemplateCopy.querySelector('.lodge__address').textContent = advertElem.offer.address;
  dialogPanelTemplateCopy.querySelector('.lodge__price').textContent = advertElem.offer.price + '/ночь';
  dialogPanelTemplateCopy.querySelector('.lodge__type').textContent = advertElem.offer.type[typeOfHouse[random(0, typeOfHouse.length - 1)]];
  dialogPanelTemplateCopy.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + advertElem.offer.guests + ' гостей в ' + advertElem.offer.rooms + ' комнатах';
  dialogPanelTemplateCopy.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + advertElem.offer.checkin + ', выезд до ' + advertElem.offer.checkout;
  dialogPanelTemplateCopy.querySelector('.lodge__features').appendChild(featuresList);
  dialogPanelTemplateCopy.querySelector('.lodge__description').textContent = advertElem.offer.description;
  avatarImg.src = advertElem.author.avatar;
  return dialogPanelTemplateCopy;
};
var dialogPanelTemplateGen = document.createDocumentFragment();
var allPins = map.querySelectorAll('.pin');
var deactivatePin = function () {
  for (i = 0; i < allPins.length; i++) {
    allPins[i].classList.remove('pin--active');
  }
};

var onPinClick = function (evt) {
  var originalDialogPanel = body.querySelector('.dialog__panel');// Search update Node for replaceChild() on 118 15.
  deactivatePin();
  openDialogPanel();
  evt.currentTarget.classList.add('pin--active');
  for (i = 0; i < allPins.length; i++) {
    if (evt.currentTarget === allPins[i]) {
      var activePin = i - 1;
    }
  }
  dialogPanelTemplateGen.appendChild(renderDialogPanel(adverts[activePin]));
  offerDialog.replaceChild(dialogPanelTemplateGen, originalDialogPanel);
};

var onEscPress = function (evt) {
  if (evt.keyCode === 27) {
    closeDialogPanel();
  }
};
var onEnterPress = function (evt) {
  if (evt.keyCode === 13) {
    onPinClick(evt);
  }
};
var closeDialogPanel = function (evt) {
  offerDialog.style.display = 'none';
  deactivatePin();
  document.removeEventListener('keydown', onEscPress);
};
var openDialogPanel = function (evt) {
  offerDialog.style.display = 'block';
  document.addEventListener('keydown', onEscPress);
};
var dialogClose = dialogTitle.querySelector('.dialog__close');
dialogClose.addEventListener('click', closeDialogPanel);
for (i = 1; i < allPins.length; i++) {
  allPins[i].addEventListener('click', onPinClick);
}
for (i = 1; i < allPins.length; i++) {
  allPins[i].addEventListener('keydown', onEnterPress);
}


