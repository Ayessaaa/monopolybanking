window.onload = function () {

    var rfidInput = document.getElementById("rfid_input")
    var rfidNumber = 0;

    var cardClicked = "";

    function scanning(){
        rfidInput.focus();
        console.log(array)
    }

    function rfidSubmit(){
        console.log("submit")
    }

    document.addEventListener('keydown', function(event){
        if(event.code == "Enter"){
            rfidNumber = rfidInput.value;
            rfidInput.value = "";
            console.log(rfidNumber);

            rfidInput.blur();

            var index = array.indexOf(String(cardClicked));
            console.log(index)
            if (index > -1) { // only splice array when item is found
                array.splice(index, 1); // 2nd parameter means remove one item only
            }
            // document.getElementById("card"+cardClicked).src=cardClicked+"b.png";
            document.getElementById(cardClicked.split("_")[0]+"_text").innerText = "Card Registered";
            // console.log(cardClicked.split("_")[0]+"_text")
        }
    } );

    array = ["playerscard_scan", "balancecard_scan"]

    document.getElementById("playerscard_scan").src="playerscard_scan.png";
    playerscard_scan.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("playerscard_scan").src="playerscard_gray_scanning.png";
        document.getElementById("playerscard_text").innerText = "Scanning . . .";
        cardClicked = "playerscard_scan";
        var index = array.indexOf("playerscard_scan");
        if (!(index > -1)) { 
            array.push("playerscard_scan"); 
        }
        scanning();
    })
    document.getElementById("playerscard_text").addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("playerscard_scan").src="transfer_gray_scanning.png";
        document.getElementById("playerscard_text").innerText = "Scanning . . .";
        cardClicked = "playerscard_scan";

        var index = array.indexOf("playerscard_scan");
        if (!(index > -1)) { 
            array.push("playerscard_scan"); 
        }
        scanning();
    })

    document.getElementById("balancecard_scan").src="balancecard_scan.png";
    balancecard_scan.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("balancecard_scan").src="balancecard_gray_scanning.png";
        document.getElementById("balancecard_text").innerText = "Scanning . . .";
        cardClicked = "balancecard_scan";
        var index = array.indexOf("balancecard_scan");
        if (!(index > -1)) { 
            array.push("balancecard_scan"); 
        }
        scanning();
    })
    document.getElementById("balancecard_text").addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("balancecard_scan").src="balancecard_gray_scanning.png";
        document.getElementById("balancecard_text").innerText = "Scanning . . .";
        cardClicked = "balancecard_scan";
        var index = array.indexOf("balancecard_scan");
        if (!(index > -1)) { 
            array.push("balancecard_scan"); 
        }
        scanning();
    })

}