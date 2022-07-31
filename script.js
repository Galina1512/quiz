// Печатаем заголовок
let text = "Занимательные задачи";
let i=0;
let speed = 100;
function type(){
    if (i<text.length)
    document.querySelector(".head").textContent+=text.charAt(i);
    i++;
    setTimeout(type, speed);
}
type();
// собираем правильные ответы
const btn = document.querySelector(".btn");
const par = document.querySelector("#par");

btn.addEventListener('click', function(e){
    e.preventDefault();
    let points = 0;
    if(document.querySelector("#right1").checked){
        points++;
    }
    if(document.querySelector("#right2").checked){
        points++;
    }
    if(document.querySelector("#right3").checked){
        points++;
    }
    if(document.querySelector("#right4").checked){
        points++;
    }

    let sum = points;
// выводим фразы в зависимости от суммы ответов
    if(sum === 4){
        par.textContent = "Отлично! Все ответы верны!";
        let audio1 = document.querySelector("#myAudio1");
       document.querySelector("#myAudio1").play();
       audio1.volume=0.3;

    }
    if (sum === 3){
        par.textContent = "Один ответ был неверным";
        let audio2 = document.querySelector("#myAudio2");
        audio2.volume=0.3;
        document.querySelector("#myAudio2").play();

    }
    if (sum === 2){
        par.textContent = "Вы решили только половину задач";
        let audio3 = document.querySelector("#myAudio3");
        document.querySelector("#myAudio3").play();
        audio3.volume=0.3;
    }
    if (sum === 1){
        par.textContent = "Только одна задача решена верно";
        let audio4 = document.querySelector("#myAudio4");
        document.querySelector("#myAudio4").play();
        audio4.volume=0.3;

    }
    if (sum === 0){
        par.textContent = "Ни одна задача не решена";
        let audio5 = document.querySelector("#myAudio5");
        document.querySelector("#myAudio5").play();
        audio5.volume=0.3;

    }

})
/* ---- анимация точки ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
