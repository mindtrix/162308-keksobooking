'use strict';
var body = document.body;
var titles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде']
var typeOfHouse = [ 'flat', 'house', 'bungalo'];
var featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var checkTime = ['12:00', '13.00', '14.00']; 
var dialogPanelTemplate = document.getElementById('lodge-template').content;
var originalDialogPanel = body.querySelector('.dialog__panel');
var offerDialog = originalDialogPanel.parentNode;
var dialogTitle = body.querySelector('.dialog__title');
var avatarImg = dialogTitle.querySelector('img');
var random = function(min,max) {
    return Math.round(Math.random()*(max-min) + (min))
};
var adverts = [];
var genElement = function(n) { 
  var x = random(300,900);
  var y =  random(100,500);
  var randomFeaturesLength = function() {
  var featuresArrcopy = featuresArr.slice();
  var counter = random(0, featuresArrcopy.length);
  for (; counter>0; counter--) {
    featuresArrcopy.splice(random(0,featuresArrcopy.length-1),1)
  }
  return featuresArrcopy;
  }
  var advertElement =  {
    'author': {
      'avatar': 'img/avatars/user0' + n + '.png'
     },
    'offer': {
      'title': titles[random(0,titles.length-1)], 
      'address': x + ',' + y,
      'price': random(1000,1000000), 
      'type': typeOfHouse[random(0,typeOfHouse.length-1)],
      'rooms': random(1,5),
      'guests': random(1,10),
      'checkin': checkTime[random(0,checkTime.length-1)],
      'checkout': checkTime[random(0,checkTime.length-1)],
      'features': randomFeaturesLength(),
      'description': '',
      'photos': []
    },
    'location': {
      'x': x,
      'y': y
    }
  }
  return advertElement;
}   
for (var i = 1; i < 9 ; i++) {
  adverts.push(genElement(i));
}
var map = document.body.querySelector('.tokyo__pin-map');
var renderPin = function(advert) {
  var pinTemplate = map.querySelector('.pin').cloneNode(true);
  pinTemplate.classList.remove('pin__main');
  pinTemplate.style = 'left:' + (advert.location.x - 20) + 'px; top:' + (advert.location.y - 20) +'px';
  pinTemplate.querySelector('img').src = advert.author.avatar;
  return pinTemplate;
}
var renderedAllPins = document.createDocumentFragment();
for (var i = 0; i < adverts.length; i++) {
  renderedAllPins.appendChild(renderPin(adverts[i]));
}
map.appendChild(renderedAllPins);
var renderDialogPanel = function() {
  var featuresList = document.createDocumentFragment();
  for (var i = 0; i < adverts[0].offer.features.length-1; i++) {
  var featureSpan = document.createElement('span');
  featureSpan.className = 'feature__image + feature__image--' + adverts[0].offer.features[i];
  featuresList.appendChild(featureSpan);
  }
  var dialogPanelTemplateCopy = dialogPanelTemplate.cloneNode(true);
  dialogPanelTemplateCopy.querySelector('.lodge__title').textContent = adverts[0].offer.title;
  dialogPanelTemplateCopy.querySelector('.lodge__address').textContent = adverts[0].offer.address;
  dialogPanelTemplateCopy.querySelector('.lodge__price').textContent = adverts[0].offer.price + '/ночь';
  dialogPanelTemplateCopy.querySelector('.lodge__type').textContent = adverts[0].offer.type;
  dialogPanelTemplateCopy.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + adverts[0].offer.guests + ' гостей в ' + adverts[0].offer.rooms + ' комнатах';
  dialogPanelTemplateCopy.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + adverts[0].offer.checkin + ', выезд до ' + adverts[0].offer.checkout;
  dialogPanelTemplateCopy.querySelector('.lodge__features').appendChild(featuresList);
  dialogPanelTemplateCopy.querySelector('.lodge__description').textContent = adverts[0].offer.description;
  return dialogPanelTemplateCopy;
}
var dialogPanelTemplateGen = document.createDocumentFragment();
dialogPanelTemplateGen.appendChild(renderDialogPanel());
offerDialog.replaceChild(dialogPanelTemplateGen,originalDialogPanel);
avatarImg.src = adverts[0].author.avatar; 



  