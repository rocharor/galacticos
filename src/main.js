// import Vue from 'vue'
// import App from './App.vue'

// // new Vue({
// //   el: '#app',
// //   render: h => h(App)
// // })

function atualizaContador() {
    var hoje = new Date();
    var futuro = new Date(2018, (12 - 1), 1, 59, 59, 59);
    var ss = parseInt((futuro - hoje) / 1000);
    var mm = parseInt(ss / 60);
    var hh = parseInt(mm / 60);
    var dd = parseInt(hh / 24);
    ss = ss - (mm * 60);
    mm = mm - (hh * 60);
    hh = hh - (dd * 24);

    if (dd + hh + mm + ss > 0) {
        document.getElementById('dia').innerHTML = dd;
        document.getElementById('hora').innerHTML = hh;
        document.getElementById('minuto').innerHTML = mm;
        document.getElementById('segundo').innerHTML = ss;
        setTimeout(atualizaContador, 1000);
    } else {
        document.getElementById('contador').innerHTML = 'CHEGOU!!!!';
        setTimeout(atualizaContador, 1000);
    }
}

window.onload = atualizaContador();


var map;
function loadMapScenario() {
    var x = '-23.184425';
    var y = '-47.111923';


    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        zoom: 16,
        // center: new Microsoft.Maps.Location(-20.577186, -48.570062)
        center: new Microsoft.Maps.Location(x, y)
    });
    // var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { color: 'red' });
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), {
        // icon: 'https://www.sodresantoro.com.br/imagens/mapa-icon.png',
        icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
        // anchor: new Microsoft.Maps.Point(12, 39),
        // text: 'A',
        // textOffset: new Microsoft.Maps.Point(0, 5)
    });
    map.entities.push(pushpin);
}

window.onload = loadMapScenario;
