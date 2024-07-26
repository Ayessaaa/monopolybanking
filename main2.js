window.onload = function () {

    var rfidInput = document.getElementById("rfid_input")
    var rfidNumber = 0;

    var cardClicked = 0;

    var array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

    function scanning(){
        rfidInput.focus();
        console.log(array)
    }

    function rfidSubmit(){
        console.log("submit")
    }

    const input = document.querySelector("input");

    input.addEventListener("keypress", logKey);

    function logKey(e) {
        if(e.code == "Enter"){
            rfidNumber = rfidInput.value;
            rfidInput.value = "";
            console.log(rfidNumber);

            rfidInput.blur();

            var index = array.indexOf(String(cardClicked));
            console.log(index)
            if (index > -1) { // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
            }


            document.getElementById("card"+cardClicked).src=cardClicked+"b.png";
            document.getElementById("text"+cardClicked).innerText = "Card Registered";
        }
    }
    
    document.getElementById("card1").src="1.png";
    card1.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card1").src="1a.png";
        document.getElementById("text1").innerText = "Scanning . . .";
        cardClicked = 1;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text1.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card1").src="1a.png";
        document.getElementById("text1").innerText = "Scanning . . .";
        cardClicked = 1;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card2").src="2.png";
    card2.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card2").src="2a.png";
        document.getElementById("text2").innerText = "Scanning . . .";
        cardClicked = 2;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text2.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card2").src="2a.png";
        document.getElementById("text2").innerText = "Scanning . . .";
        cardClicked = 2;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card3").src="3.png";
    card3.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card3").src="3a.png";
        document.getElementById("text3").innerText = "Scanning . . .";
        cardClicked = 3;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text3.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card3").src="3a.png";
        document.getElementById("text3").innerText = "Scanning . . .";
        cardClicked = 3;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card4").src="4.png";
    card4.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card4").src="4a.png";
        document.getElementById("text4").innerText = "Scanning . . .";
        cardClicked = 4;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text4.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card4").src="4a.png";
        document.getElementById("text4").innerText = "Scanning . . .";
        cardClicked = 4;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card5").src="5.png";
    card5.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card5").src="5a.png";
        document.getElementById("text5").innerText = "Scanning . . .";
        cardClicked = 5;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text5.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card5").src="5a.png";
        document.getElementById("text5").innerText = "Scanning . . .";
        cardClicked = 5;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card6").src="6.png";
    card6.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card6").src="6a.png";
        document.getElementById("text6").innerText = "Scanning . . .";
        cardClicked = 6;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text6.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card6").src="6a.png";
        document.getElementById("text6").innerText = "Scanning . . .";
        cardClicked = 6;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card7").src="7.png";
    card7.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card7").src="7a.png";
        document.getElementById("text7").innerText = "Scanning . . .";
        cardClicked = 7;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text7.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card7").src="7a.png";
        document.getElementById("text7").innerText = "Scanning . . .";
        cardClicked = 7;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card8").src="8.png";
    card8.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card8").src="8a.png";
        document.getElementById("text8").innerText = "Scanning . . .";
        cardClicked = 8;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text8.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card8").src="8a.png";
        document.getElementById("text8").innerText = "Scanning . . .";
        cardClicked = 8;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card9").src="9.png";
    card9.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card9").src="9a.png";
        document.getElementById("text9").innerText = "Scanning . . .";
        cardClicked = 9;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text9.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card9").src="9a.png";
        document.getElementById("text9").innerText = "Scanning . . .";
        cardClicked = 9;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

    document.getElementById("card10").src="10.png";
    card10.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card10").src="10a.png";
        document.getElementById("text10").innerText = "Scanning . . .";
        cardClicked = 10;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })
    text10.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById("card"+element).src=element+".png";
            document.getElementById("text"+element).innerText = "Tap to Scan Card";
        });
        document.getElementById("card10").src="10a.png";
        document.getElementById("text10").innerText = "Scanning . . .";
        cardClicked = 10;
        var index = array.indexOf(String(cardClicked));
        if (!(index > -1)) { 
            array.push(String(cardClicked)); 
        }
        scanning();
    })

}