    var myImages = [
      "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/1c40/live/e611fdf0-44ba-11f0-97b4-67d517414746.jpg",
      "https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000",
      "https://media.cnn.com/api/v1/images/stellar/prod/221203124850-01-pele-legend-file.jpg?q=w_1110,c_fill",
      "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2017/03/maradona86.jpg?fit=1600%2C1053&ssl=1",
      "https://tmssl.akamaized.net/images/foto/galerie/eusebio-1670414809-98149.jpg"
    ];

    var captionImages = [
      "This is the soccer player Cristiano Ronaldo. He is currently Portugal's all time leading goal scorer.",
      "This is the soccer player Lionel Messi. He is currently Argentina's all time leading goal scorer.",
      "This is the soccer player Pele. He has passed away, but was Brazil's all time leading goal scorer.",
      "This is the soccer player Diego Maradona. He is an Argentine legend that won the country their first World Cup.",
      "This is the soccer player Eusebio. He is a Portuguese icon who played for some of Europe's biggest clubs."
    ];

    var index = 0;
    var countdown = 4;
    var intervalId = null;

    var imgElement = document.getElementById("slideshow");
    var captionElement = document.getElementById("caption");
    var timerElement = document.getElementById("timer");

    function updateImage() {
      imgElement.src = myImages[index];
      imgElement.alt = captionImages[index];
      captionElement.textContent = captionImages[index];
      resetTimer();
    }

    function next() {
      index = (index + 1) % myImages.length;
      updateImage();
    }

    function back() {
      index = (index - 1 + myImages.length) % myImages.length;
      updateImage();
    }

    function autoSlide() {
      if (document.getElementById("auto").checked) {
        countdown--;
        timerElement.textContent = countdown;
        if (countdown === 0) {
          next();
        }
      } else {
        timerElement.textContent = "Paused";
      }
    }

    function resetTimer() {
      countdown = 4;
      timerElement.textContent = countdown;
    }

    setInterval(autoSlide, 1000);

    document.getElementById("next").addEventListener("click", next);
    document.getElementById("previous").addEventListener("click", back);
