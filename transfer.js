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
            
            document.getElementById(cardClicked).src="playerscard10.png";
            document.getElementById(cardClicked.split("_")[0]+"_text").innerText = "Card Registered";
            document.getElementById(cardClicked.split("_")[0]+"_text").style.color = "white";
            // console.log(cardClicked.split("_")[0]+"_text")
        }
    } );

    array = ["sender_scan", "receiver_scan", "balancecard_scan"]

    document.getElementById("sender_scan").src="sender_scan.png";
    sender_scan.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("sender_scan").src="transfer_gray_scanning.png";
        document.getElementById("sender_text").innerText = "Scanning . . .";
        cardClicked = "sender_scan";
        var index = array.indexOf("sender_scan");
        if (!(index > -1)) { 
            array.push("sender_scan"); 
        }
        scanning();
    })
    document.getElementById("sender_text").addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("sender_scan").src="transfer_gray_scanning.png";
        document.getElementById("sender_text").innerText = "Scanning . . .";
        cardClicked = "sender_scan";

        var index = array.indexOf("sender_scan");
        if (!(index > -1)) { 
            array.push("sender_scan"); 
        }
        scanning();
    })

    document.getElementById("receiver_scan").src="receiver_scan.png";
    receiver_scan.addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("receiver_scan").src="transfer_gray_scanning.png";
        document.getElementById("receiver_text").innerText = "Scanning . . .";
        cardClicked = "receiver_scan";
        var index = array.indexOf("receiver_scan");
        if (!(index > -1)) { 
            array.push("receiver_scan"); 
        }
        scanning();
    })
    document.getElementById("receiver_text").addEventListener("click", function () {
        array.forEach(element => {
            document.getElementById(element).src=element+".png";
            document.getElementById(element.split("_")[0]+"_text").innerText = "Tap to Scan Card";
        });
        document.getElementById("receiver_scan").src="transfer_gray_scanning.png";
        document.getElementById("receiver_text").innerText = "Scanning . . .";
        cardClicked = "receiver_scan";
        var index = array.indexOf("receiver_scan");
        if (!(index > -1)) { 
            array.push("receiver_scan"); 
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