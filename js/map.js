'use strict';
var body = document.body;
var titles = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде']
var typeOfHouse = [ 'flat', 'house', 'bungalo'];
var featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var checkTime = ['12:00', '13.00', '14.00']; 
var dialogPanelTemplate = document.getElementById('lodge-template').content;
var random = function(min,max) {
    return Math.round(Math.random()*(max-min) + (min))
};
function randomLengthArr (x) {
var length = x.length = random(1,6);
return x;
};
var adverts = [];
var genElement = function(n)  { 
        var advertElement =  {
            'author': {
                'avatar': 'img/avatars/user0' + n + '.png'
            },
            'offer': {
                'title':titles[random(0,titles.length-1)], 
                'address':location.x + ',' + location.y,// Почему undefined?
                'price': random(1000,1000000), 
                'type': typeOfHouse[random(0,typeOfHouse.length-1)],
                'rooms': random(1,5),
                'guests': random(1,10),
                'checkin': checkTime[random(0,checkTime.length-1)],
                'checkout': checkTime[random(0,checkTime.length-1)],
                'features': randomLengthArr(featuresArr),// Как определить случаную длинну?
                'description': '',
                'photos': []
            },
            'location': {
                'x': random(300,900),
                'y': random(100,500)
            }
          }
          return advertElement;
        }   
for (var i = 1; i < 9 ; i++) {
    adverts.push(genElement(i));
}

var map = document.body.querySelector('.tokyo__pin-map');
var renderPin = function() {
    var pinTemplate = map.querySelector('.pin').cloneNode(true);
    map.querySelector('.pin').style = 'left:' + adverts[i].location.x - 20 + 'px;top:' + adverts[i].location.y - 22 + 'px';
    map.querySelector('img').src = adverts[i].author.avatar;
    return pinTemplate;
}
var renderedAllPins = document.createDocumentFragment();
for (var i = 0; i < adverts; i++) {
    renderedAllPins.appendChild(renderPin());
}
map.appendChild(renderedAllPins);

var renderDialogPanel = function() {
    dialogPanelTemplate.querySelector('.lodge__title').textContent = adverts[0].offer.title;
    dialogPanelTemplate.querySelector('.dialog__title img').src = author.avatar;
}
