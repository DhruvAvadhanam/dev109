var myImages =["https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/1c40/live/e611fdf0-44ba-11f0-97b4-67d517414746.jpg",
               "https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000",
               "https://i.ebayimg.com/images/g/oMEAAOSwOsFmujxS/s-l1200.jpg",
               "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2017/03/maradona86.jpg?fit=1600%2C1053&ssl=1",
               "https://iffhs.com/images/legend-images/42/1.jpg"];


var captionImages =["This is the soccer player Cristiano Ronaldo. He is currently Portugal's all time leading goal scorer.",
                    "This is the soccer player Lionel Messi. He is currently Argentina's all time leading goal scorer.",
                    "This is the soccer player Pele. He is has passed away, but was Brazil's all time leading goal scorer.",
                    "This is the soccer player Diego Maradona. He is an Argentian legend that won the country their first World Cup.",
                    "This is the soccer player Eusebio. He is a Portuguese icon who played for some of Europe's biggest clubs."];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1) {
    index=0;
   updateImage();
 }else {
   index++;
   updateImage();
 }
} 
 

function back(){
 if (index===0) {
    index=myImages.length-1;
   updateImage();
 }else {
    index--;
    updateImage();
 }
} 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,4000); // Next
var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);




nextButton.addEventListener("click",next,false); 
