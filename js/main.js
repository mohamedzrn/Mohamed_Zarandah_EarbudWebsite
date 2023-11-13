(() => {
  (function(){
      "use strict";
  
  
  var imageCon = document.querySelector('#imageCon'),
      drag = document.querySelector('.image-drag'),
      left = document.querySelector('.image-left'),
      dragging = false,
      min = 0,
      max = imageCon.offsetWidth;
      //The HTMLElement.offsetWidth read-only property returns the layout width of an element. 
  
  function onDown() {
    dragging = true;
  }
  
  function onUp() {
    dragging = false;
  }
  
  function onMove(event) {
    if(dragging===true) {
      var x = event.clientX - imageCon.getBoundingClientRect().left;
      //The MouseEvent.clientX read-only property provides the horizontal coordinate within the application's client area at which the event occurred
      //The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
      //X-coordinate, relative to the viewport origin, of the left of the rectangle box. Read only
      console.log(event.clientX);
      console.log(imageCon.getBoundingClientRect().left);
    //need logic to keep slider in box
      if(x < min) { //if x less than 0
        x = min;    //set x = 0
      }
     else if(x > max) { //otherwise if x is greater than 900
        x = max-4; //set x to equal the max width minus 2 (width of slider)
      }
      drag.style.left = x + 'px';
      left.style.width = x + 'px';
    }
  }
  
  drag.addEventListener('mousedown', onDown, false); 
  //add listener to actual drag div, if user clicks on it
  //drag.addEventListener('touchstart', onDown);
  document.body.addEventListener('mouseup', onUp, false);
  //document.body.addEventListener('mo', onUp);
  document.body.addEventListener('mousemove', onMove, false);
  //document.body.addEventListener('touchmove', onMove);
  
  })();
  
  
  /*231-187.5 = 43.5.  43.5 is how much of the car is left showing*/
  
  /*
  The MouseEvent.clientX read-only property provides the horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientX value of 0, regardless of whether the page is scrolled horizontally.
  */


})();

//for the modelviewer
(() => {

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
    const infoBoxes = [
      { 
        title: "CHARGER PORT",
        text: "This is the charger port.",
        image: "images/copperinsulation.jpg"
      },
      { 
        title: "MULTI-FUNCTIONAL SENSOR",
        text: "This sensor can measure temperature and humidity in a room. It also has an infrared sensor that detects objects or light sources.",
        image: "images/copperinsulation.jpg"
      },
      { 
        title: "Mic-2",
        text: "This is the second microphone of the device. It can be used for voice assistants or other applications that require two microphones.",
        image: "images/copperinsulation.jpg"
      },
      { 
        title: "Mic",
        text: "This is the microphone of our device. It can be used for voice assistant integration or recording audio.",
        image: "images/copperinsulation.jpg"
      },
      { 
        title: "MESH SPEAKER",
        text: "This is a mesh speaker that can be used for listening to music or watching videos in comfort.",
        image: "images/copperinsulation.jpg"
      }
      
    ];
  
    function modelLoaded() {
      hotspots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    function LoadInfo() {
      infoBoxes.forEach((infoBox, index)=>{

        let selected = document.querySelector(`#hotspot-${index+1}`);
          h2 = document.createElement('h2');
          h2.textContent = infoBox.title
          p = document.createElement("p");
          p.textContent = infoBox.text;
        console.log(selected);
        console.log(infoBox.title);
        console.log(infoBox.text);

        selected.appendChild(h2);
        selected.appendChild(p);
      })  
    }

    LoadInfo();
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelectorAll(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  
  
    // var tl = new TimelineMax({ delay: 0.3 });
  
    // MorphSVGPlugin.convertToPath("circle");
  
    // let circles = document.querySelectorAll(".hover");
  
    // function hover() {
    //   tl.play();
    //   tl.to(".circle1", 0.2, { morphSVG: ".path1" });
    //   tl.to(".circle2", 0.2, { morphSVG: ".path2" });
    //   tl.to(".circle3", 0.2, { morphSVG: ".path3" });
    // }
  
    // function hide() {
    //   tl.to(".hover", 0.6, { morphSVG: "circle" });
    //   tl.to(".hover", 0.6, { morphSVG: "circle" });
    //   tl.to(".hover", 0.6, { morphSVG: "circle" });
    //   tl.seek(0);
    //   tl.pause();
    // }
  
    // circles.forEach(function (circle) {
    //   circle.addEventListener("mouseover", hover);
    //   circle.addEventListener("mouseout", hide);
    // });
  })();
  