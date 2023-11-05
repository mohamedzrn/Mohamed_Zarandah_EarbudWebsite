(() => {

    // for the image-slider
    let imageCon = document.querySelector(`#imageCon`),
        drag = document.querySelector(`.image-drag`),
        left = document.querySelector(`.image-left`),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

        function onDown () {
            dragging = true;
            console.log("Set to true")
        }

        function onUp () {
            dragging = false;
            console.log("Set to false")
        }

        function onMove (event) {
            //console.log("on move called");
            if (dragging===true) {
                // console.log("dragging");
                let x = event.clientX - imageCon.getBoundingClientRect().left;
                console.log(x);

                if(x < min) {
                    x = min;
                } else if(x > max) {
                    x = max-10;
                }

                drag.style.left = x +"px";
                left.style.width = x +"px";
            }

        }

        drag.addEventListener(`mousedown`, onDown);
        document.body.addEventListener(`mouseUp`, onUp);
        document.body.addEventListener(`mousemove`, onMove);
})();

//for the modelviewer
(() => {

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [
      { 
        title: "Noise-cancelling microphones",
        text: "Noise-cancelling microphones and a rear copper shield are optimally placed to quickly detect outside noises, working together to counter noise before it disturbs your experience",
        image: "images/copperinsulation.jpg"
      }
    ];
  
    function modelLoaded() {
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function loadInfo() {
      infoBoxes.forEach((infoBox, index)=>{
        let selected = document.querySelector(`#hotspot-${index+1}`);
        console.log(selected);
        console.log(infoBox.title);
        console.log(infoBox.text);
      })  
    }
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  
  
    var tl = new TimelineMax({ delay: 0.3 });
  
    MorphSVGPlugin.convertToPath("circle");
  
    let circles = document.querySelectorAll(".hover");
  
    function hover() {
      tl.play();
      tl.to(".circle1", 0.2, { morphSVG: ".path1" });
      tl.to(".circle2", 0.2, { morphSVG: ".path2" });
      tl.to(".circle3", 0.2, { morphSVG: ".path3" });
    }
  
    function hide() {
      tl.to(".hover", 0.6, { morphSVG: "circle" });
      tl.to(".hover", 0.6, { morphSVG: "circle" });
      tl.to(".hover", 0.6, { morphSVG: "circle" });
      tl.seek(0);
      tl.pause();
    }
  
    circles.forEach(function (circle) {
      circle.addEventListener("mouseover", hover);
      circle.addEventListener("mouseout", hide);
    });
  })();
  