const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}


(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let meeting = "Sep 8, 2023 00:00:00",
        countDown = new Date(meeting).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Today is meeting day my g.";
            countdown.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


    

    const buttons = document.querySelectorAll('.read-more-btn');
    const textElements = document.querySelectorAll('.hideText');
    
    
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const textElement = textElements[index];
        textElement.classList.toggle('showText');
    
        // Cambia el texto del botón
        if (textElement.classList.contains('showText')) {
          button.textContent = 'Read Less';
        } else {
          button.textContent = 'Read More';
        }
      });
    });
    