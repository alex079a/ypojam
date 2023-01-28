var kathari = document.getElementById('kt');
var teliki = document.getElementById('tt');


// apo kathari teliki



kathari.addEventListener('input', updateValue0);


function updateValue0(e) {

    var fpa = 24;
    var mefpa = parseFloat(kathari.value) +(parseFloat(kathari.value) * fpa) / 100;

    teliki.value = mefpa + 0.35;
  }





teliki.addEventListener('input', updateValue1);


function updateValue1(e) {

    var fpa = 24;
    var mieonfpa = parseFloat(teliki.value) - (parseFloat(teliki.value) * fpa) / 100;

    kathari.value = mieonfpa - 0.35;
  }