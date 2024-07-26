window.onload = function () {
  

  var card1 = document.getElementById("card1");
  var text1 = document.getElementById("text1");
  const img1 = document.createElement("img");
  img1.src = "1a.png";

  card1.addEventListener("click", function () {
    img1.src = "1a.png";
    document.querySelector("#card1").replaceWith(img1);
    text1.innerText = "Scanning . . .";

    img2.src = "2.png";
    document.getElementById("text2").innerText = "Tap to Scan Card";
    img3.src = "3.png";
    document.getElementById("text3").innerText = "Tap to Scan Card";
  });
  text1.addEventListener("click", function () {
    document.querySelector("#card1").replaceWith(img1);
    text1.innerText = "Scanning . . .";
  });

  var card2 = document.getElementById("card2");
  var text2 = document.getElementById("text2");
  const img2 = document.createElement("img");
  img2.src = "2a.png";

  card2.addEventListener("click", function () {
    img2.src = "2a.png";
    document.querySelector("#card2").replaceWith(img2);
    text2.innerText = "Scanning . . .";

    img1.src = "1.png";
    document.getElementById("text1").innerText = "Tap to Scan Card";
    img3.src = "3.png";
    document.getElementById("text3").innerText = "Tap to Scan Card";
  });

  var card3 = document.getElementById("card3");
  var text3 = document.getElementById("text3");
  const img3 = document.createElement("img");
  img3.src = "3a.png";

  card3.addEventListener("click", function () {
    document.querySelector("#card3").replaceWith(img3);
    text3.textContent = "Scanning . . .";
  });

  var card4 = document.getElementById("card4");
  var text4 = document.getElementById("text4");
  const img4 = document.createElement("img");
  img4.src = "4a.png";

  card4.addEventListener("click", function () {
    document.querySelector("#card4").replaceWith(img4);
    text4.textContent = "Scanning . . .";
  });

  var card5 = document.getElementById("card5");
  var text5 = document.getElementById("text5");
  const img5 = document.createElement("img");
  img5.src = "5a.png";

  card5.addEventListener("click", function () {
    document.querySelector("#card5").replaceWith(img5);
    text5.textContent = "Scanning . . .";
  });

  var card6 = document.getElementById("card6");
  var text6 = document.getElementById("text6");
  const img6 = document.createElement("img");
  img6.src = "6a.png";

  card6.addEventListener("click", function () {
    document.querySelector("#card6").replaceWith(img6);
    text6.textContent = "Scanning . . .";
  });

  var card7 = document.getElementById("card7");
  var text7 = document.getElementById("text7");
  const img7 = document.createElement("img");
  img7.src = "7a.png";

  card7.addEventListener("click", function () {
    document.querySelector("#card7").replaceWith(img7);
    text7.textContent = "Scanning . . .";
  });

  var card8 = document.getElementById("card8");
  var text8 = document.getElementById("text8");
  const img8 = document.createElement("img");
  img8.src = "8a.png";

  card8.addEventListener("click", function () {
    document.querySelector("#card8").replaceWith(img8);
    text8.textContent = "Scanning . . .";
  });

  var card9 = document.getElementById("card9");
  var text9 = document.getElementById("text9");
  const img9 = document.createElement("img");
  img9.src = "9a.png";

  card9.addEventListener("click", function () {
    document.querySelector("#card9").replaceWith(img9);
    text9.textContent = "Scanning . . .";
  });

  var card10 = document.getElementById("card10");
  var text10 = document.getElementById("text10");
  const img10 = document.createElement("img");
  img10.src = "10a.png";

  card10.addEventListener("click", function () {
    document.querySelector("#card10").replaceWith(img10);
    text10.textContent = "Scanning . . .";
  });

};
