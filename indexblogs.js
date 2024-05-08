  // mobilemenu
  function pageWidth() {
    return window.innerWidth != null ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
}
console.log(pageWidth());


function greatersize() {
    var box1 = document.getElementById("mobilemenu");
    var box2 = document.getElementById("middleblogs");
    var box3 = document.getElementById("footer");
    if (pageWidth() > 921) {
        box1.style.display = "none";
        box2.style.display = "grid";
        box3.style.display = "flex";
    }
}
document.getElementById("mobilemenubtn").addEventListener("click", function () {

    var box1 = document.getElementById("mobilemenu");
    var box2 = document.getElementById("middleblogs");
    var box3 = document.getElementById("footer");
    if (pageWidth() < 921) {
        if (box1.style.display == "none") {
            box1.style.display = "grid";
            box2.style.display = "none";
            box3.style.display = "none";


        }
        else {
            box1.style.display = "none";
            box2.style.display = "block";
            box3.style.display = "flex";

        }
    }

    else {
        greatersize();
    }
})

var imagebox1 = document.getElementById("image1");
var imagebox2 = document.getElementById("image2");
var imagebox3 = document.getElementById("image3")
var imagebox4 = document.getElementById("image4")
var imagebox5 = document.getElementById("image5")
var imagebox6 = document.getElementById("image6")
var imagebox7 = document.getElementById("image7")
var imagebox8 = document.getElementById("image8")
var imagebox9 = document.getElementById("image9")
var imagebox10 = document.getElementById("image10")
document.getElementById("img1").addEventListener("click", function () { 
    imagebox1.style.display = "flex";
        imagebox2.style.display = "none"
        imagebox3.style.display = "none"
        imagebox4.style.display = "none"
        imagebox5.style.display = "none"
        imagebox6.style.display = "none"
        imagebox7.style.display = "none"
        imagebox8.style.display = "none"
        imagebox9.style.display = "none"
        imagebox10.style.display = "none"


})
document.getElementById("img2").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "flex"
    imagebox3.style.display = "none"
    imagebox4.style.display = "none"
    imagebox5.style.display = "none"
    imagebox6.style.display = "none"
    imagebox7.style.display = "none"
    imagebox8.style.display = "none"
    imagebox9.style.display = "none"
    imagebox10.style.display = "none"
   
})
document.getElementById("img3").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "flex"
    imagebox4.style.display = "none"
    imagebox5.style.display = "none"
    imagebox6.style.display = "none"
    imagebox7.style.display = "none"
    imagebox8.style.display = "none"
    imagebox9.style.display = "none"
    imagebox10.style.display = "none"
   
})
document.getElementById("img4").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "none"
    imagebox4.style.display = "flex"
    imagebox5.style.display = "none"
    imagebox6.style.display = "none"
    imagebox7.style.display = "none"
    imagebox8.style.display = "none"
    imagebox9.style.display = "none"
    imagebox10.style.display = "none"
   
})
document.getElementById("img5").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "none"
    imagebox4.style.display = "none"
    imagebox5.style.display = "flex"
    imagebox6.style.display = "none"
    imagebox7.style.display = "none"
    imagebox8.style.display = "none"
    imagebox9.style.display = "none"
    imagebox10.style.display = "none"
   
})
document.getElementById("img6").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "none"
    imagebox4.style.display = "none"
    imagebox5.style.display = "none"
    imagebox6.style.display = "flex"
    imagebox7.style.display = "none"
    imagebox8.style.display = "none"
    imagebox9.style.display = "none"
    imagebox10.style.display = "none"
   
})
document.getElementById("img7").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "none"
    imagebox4.style.display = "none"
    imagebox5.style.display = "none"
    imagebox6.style.display = "none"
    imagebox7.style.display = "flex"
    imagebox8.style.display = "none"
    imagebox9.style.display = "none"
    imagebox10.style.display = "none"
   
})
document.getElementById("img8").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "none"
    imagebox4.style.display = "none"
    imagebox5.style.display = "none"
    imagebox6.style.display = "none"
    imagebox7.style.display = "none"
    imagebox8.style.display = "flex"
    imagebox9.style.display = "none"
    imagebox10.style.display = "none"
   
})
document.getElementById("img9").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "none"
    imagebox4.style.display = "none"
    imagebox5.style.display = "none"
    imagebox6.style.display = "none"
    imagebox7.style.display = "none"
    imagebox8.style.display = "none"
    imagebox9.style.display = "flex"
    imagebox10.style.display = "none"
   
})
document.getElementById("img10").addEventListener("click", function () {

    imagebox1.style.display = "none";
    imagebox2.style.display = "none"
    imagebox3.style.display = "none"
    imagebox4.style.display = "none"
    imagebox5.style.display = "none"
    imagebox6.style.display = "none"
    imagebox7.style.display = "none"
    imagebox8.style.display = "none"
    imagebox9.style.display = "none"
    imagebox10.style.display = "flex"
   
})


// for page greater than 921px
var box1 = document.getElementById("mobilemenu");
var box2 = document.getElementById("middlefirst");
var box3 = document.getElementById("footer");
if (pageWidth() > 921) {
    box1.style.display = "none";
    box2.style.display = "block";
    box3.style.display = "flex";
}

//    for resizing

window.addEventListener('resize', function (event) {
    greatersize();
})



// changing on blog page
