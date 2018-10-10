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