var typeOfHouse = [ 'flat', 'house', 'bungalo'];
var featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var checkTime = ['13.00', '14.00'];
var checkHours = [, '13:00', '14:00'];  
var random = function(min,max) {
	return Math.round(Math.random()*(max-min) + (min))
};
/*
function randomLengthArr (x) {
var length = x.length = random(1,6);
return x;
};*/

var adverts = [
		{
			"author": {
    			"avatar": 'img/avatars/user0' + n + '.png'
  			},
  			"offer": {
    			"title":'Большая уютная квартира', 
    			"address": //'location.x, location.y',
    			"price": random(1000,1000000), 
    			"type": typeOfHouse[random(0,typeOfHouse.length-1)],
    			"rooms": random(1,5),
    			"guests": random(1,10),
    			"checkin": '12.00',
    			"checkout": checkTime[random(0,checkTime.length-1)],
    			"features": //randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}	
		},
	 	{
			"author": {
    			"avatar": 'img/avatars/user0' + n + '.png'
  			},
  			"offer": {
    			"title":"Маленькая неуютная квартира", 
    			"address": //'location.x, location.y',
    			"price": random(1000,1000000), 
    			"type": typeOfHouse[random(0,typeOfHouse.length-1)],
    			"rooms": random(1,5),
    			"guests": random(1,10),
    			"checkin": '12.00',
    			"checkout": checkTime[random(0,checkTime.length-1)],
    			"features": //randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}	
		},
		 {
			"author": {
    			"avatar": 'img/avatars/user0' + n + '.png'
  			},
  			"offer": {
    			"title": "Огромный прекрасный дворец", 
    			"address": //'location.x, location.y',
    			"price": random(1000,1000000), 
    			"type": typeOfHouse[random(0,typeOfHouse.length-1)],
    			"rooms": random(1,5),
    			"guests": random(1,10),
    			"checkin": '12.00',
    			"checkout": checkTime[random(0,checkTime.length-1)],
    			"features":// randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}	
		},
	 	{
			"author": {
    			"avatar": 'img/avatars/user0' + n + '.png'
  			},
  			"offer": {
    			"title": "Маленький ужасный дворец", 
    			"address": //'location.x, location.y',
    			"price": random(1000,1000000), 
    			"type": typeOfHouse[random(0,typeOfHouse.length-1)],
    			"rooms": random(1,5),
    			"guests": random(1,10),
    			"checkin": '12.00',
    			"checkout": checkTime[random(0,checkTime.length-1)],
    			"features": //randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}	
		},
	 	{
			"author": {
				"avatar": 'img/avatars/user0' + n + '.png'
  			},
  			"offer": {
    			"title": "Красивый гостевой домик", 
    			"address": //'location.x, location.y',
    			"price": random(1000,1000000), 
    			"type": typeOfHouse[random(0,typeOfHouse.length-1)],
    			"rooms": random(1,5),
    			"guests": random(1,10),
    			"checkin": '12.00',
    			"checkout": checkTime[random(0,checkTime.length-1)],
    			"features": //randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}	
		},
		 {
			"author": {
    			"avatar": 'img/avatars/user0' + n + '.png'
  			},
  			"offer": {
    			"title": "Красивый гостевой домик", 
    			"address": //'location.x, location.y',
    			"price": random(1000,1000000), 
    			"type": typeOfHouse[random(0,typeOfHouse.length-1)],
    			"rooms": random(1,5),
    			"guests": random(1,10),
    			"checkin": '12.00',
    			"checkout": checkTime[random(0,checkTime.length-1)],
    			"features": //randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}		
		},
		 {
			"author": {
    			"avatar": 'img/avatars/user0' + n + '.png'
  			},	
  			"offer": {
	    		"title": "Некрасивый негостеприимный домик", 
	    		"address": //'location.x, location.y',
	    		"price": random(1000,1000000), 
	    		"type": typeOfHouse[random(0,typeOfHouse.length-1)],
	    		"rooms": random(1,5),
	    		"guests": random(1,10),
	    		"checkin": '12.00',
	    		"checkout": checkTime[random(0,checkTime.length-1)],
    			"features": //randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}	
		},
		 {
			"author": {
				"avatar": 'img/avatars/user0' + n + '.png'
  		},
  			"offer": {
    			"title": "Неуютное бунгало по колено в воде", 
    			"address": //'location.x, location.y',
    			"price": random(1000,1000000), 
    			"type": typeOfHouse[random(0,typeOfHouse.length-1)],
    			"rooms": random(1,5),
    			"guests": random(1,10),
    			"checkin": '12.00',
    			"checkout": checkTime[random(0,checkTime.length-1)],
    			"features": //randomLengthArr(featuresArr),
    			"description": '',
    			"photos": []
  			},
			"location": {
    			"x": random(300,900),
    			"y": random(100,500)
  			}	
		}
	 ]

var map = document.body.querySelector('.tokyo__pin-map');
var renderPin = function() {
	var pinTemplate = map.querySelector('.pin').cloneNode(true);
	map.querySelector('.pin').style = 'left:' + adverts[i].location.x + 'px', 'top:' + adverts[i].location.y + 'px';
	map.querySelector('img').src = author.avatar;
	return pinTemplate;
}
var renderedAllPins = document.createDocumentFragment();
for (var i = 0;i < adverts; i++) {
	renderedAllPins.appendChild(renderPin());
}
map.appendChild(renderedAllPins);	