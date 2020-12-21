// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modals
var startButton = document.getElementById("startButton");
var startOverButton = document.getElementById("startOverButton");
var startOverButton2 = document.getElementById("startOverButton2");
var noBits = document.getElementById("noBits");
var displayBit = document.getElementById("displayBit");
var close = document.getElementsByClassName("close");


// When the user clicks on the button, open the modal
startButton.onclick = function () {

    restart();

}

startOverButton.onclick = function () {

    refreshPage();

}

startOverButton2.onclick = function () {

    refreshPage();

}

//Using a refreshPage to clear data as can't figure out how to clear const data. 

function refreshPage(){
    window.location.reload();
} 

//resets values and hides modals on restart. May be able to get rid of some of these.

function restart() {

    document.getElementById('myModal3').style.display = "none";
    bitValue = null;
    created = false;
    enterThickness.value = null;
    enterRPM.value = null;
    selectMaterial.value = "Select Material";
    thickness.style.visibility = "hidden";
    rpm.style.visibility = "hidden";
    bitList.style.visibility = "hidden";
    modal3.style.display = "hidden";
    modal4.style.display = "hidden";
    modal.style.display = "visible";
    modal.style.display = "block";
    displayBits.value = null;
    enterThickness.value = null;
    displayBits.value = "Select Bit";

}

var created = false;
var materialValue;
var thicknessValue;
var bitValue;
var enteredThickness = document.getElementById(enterThickness);
var rpmValue;
var enteredRPM = document.getElementById("enterRPM");
var select = document.getElementById('selectMaterial');
var select2 = document.getElementById('displayBits');
var hardness;
var passDepth;
var numPass;
var feedRate;
var rpmBit;

//Array to hold materials.

var materials = [

    { name: "Select Material" },
    { name: "Acrylic", metal: false, plastic: true, multipurpose: true, soft: false, hard: true },
    { name: "Aluminum", metal: true, plastic: false, multipurpose: false, soft: false, hard: true },
    { name: "Armed Graphite Gasket", plastic: true, multipurpose: true, soft: false, hard: true },
    { name: "Hard Brass", metal: true, plastic: false, multipurpose: false, soft: false, hard: true },
    { name: "Hard Foam", metal: false, plastic: true, multipurpose: true, soft: false, hard: true },
    { name: "PVC - Soft", metal: false, plastic: true, multipurpose: true, soft: true, hard: false },
    { name: "PVC - Rigid", metal: false, plastic: true, multipurpose: true, soft: false, hard: true },
    { name: "Polycarbonate - Soft", metal: false, plastic: true, multipurpose: true, soft: true, hard: false },
    { name: "Polycarbonate - Rigid", metal: false, plastic: true, multipurpose: true, soft: false, hard: true },
    { name: "Polypropylene", metal: false, plastic: true, multipurpose: true, soft: true, hard: false },
    { name: "Wood - Soft", metal: false, plastic: true, multipurpose: true, soft: true, hard: false },
    { name: "Wood - Hard", metal: false, plastic: true, multipurpose: true, soft: false, hard: true }

];

//Array to hold the bits.

var bits = [

    { name: 'M1-308U', material: 'metal', ced: 3, cel: 8, flutes: 1, angle: 'up', rpm: 60000, soft: .003, hard: .005 },
    { name: 'M1-308UC', material: 'metal', ced: 3, cel: 8, flutes: 1, angle: 'up', rpm: 60000, soft: .003, hard: .005 },
    { name: 'M1-408U', material: 'metal', ced: 4, cel: 8, flutes: 1, angle: 'up', rpm: 60000, soft: .004, hard: .006 },
    { name: 'M1-506D', material: 'metal', ced: 5, cel: 6, flutes: 1, angle: 'down', rpm: 50000, soft: .005, hard: .007 },
    { name: 'M1-506U', material: 'metal', ced: 5, cel: 6, flutes: 1, angle: 'up', rpm: 55000, soft: .005, hard: .007 },
    { name: 'M1-506UC', material: 'metal', ced: 5, cel: 6, flutes: 1, angle: 'up', rpm: 50000, soft: .006, hard: .008 },
    { name: 'M1-608U', material: 'metal', ced: 6, cel: 8, flutes: 1, angle: 'up', rpm: 50000, soft: .006, hard: .008 },
    { name: 'M1-608UC', material: 'metal', ced: 6, cel: 8, flutes: 1, angle: 'up', rpm: 50000, soft: .003, hard: .006 },
    { name: 'M1-608UC', material: 'metal', ced: 6, cel: 8, flutes: 1, angle: 'up', rpm: 50000, soft: .003, hard: .006 },
    { name: 'M2-406U', material: 'metal', ced: 4, cel: 6, flutes: 2, angle: 'up', rpm: 50000, soft: .003, hard: .006 },
    { name: 'M2-606U', material: 'metal', ced: 6, cel: 6, flutes: 2, angle: 'up', rpm: 50000, soft: .005, hard: .007 },
    { name: 'MZ-303U', material: 'metal', ced: 3, cel: 3, flutes: 2, angle: 'up', rpm: 50000, soft: .003, hard: .005 },
    { name: 'P1-208D', material: 'plastic', ced: 2, cel: 8, flutes: 1, angle: 'down', rpm: 60000, soft: .003, hard: .005 },
    { name: 'P1-208U', material: 'plastic', ced: 2, cel: 8, flutes: 1, angle: 'up', rpm: 60000, soft: .003, hard: .005 },
    { name: 'P1-306U', material: 'plastic', ced: 3, cel: 6, flutes: 1, angle: 'up', rpm: 60000, soft: .004, hard: .006 },
    { name: 'P1-312D', material: 'plastic', ced: 2, cel: 8, flutes: 1, angle: 'down', rpm: 60000, soft: .004, hard: .005 },
    { name: 'P1-312U', material: 'plastic', ced: 3, cel: 12, flutes: 1, angle: 'up', rpm: 60000, soft: .004, hard: .006 },
    { name: 'P1-418D', material: 'plastic', ced: 4, cel: 18, flutes: 1, angle: 'down', rpm: 40000, soft: .005, hard: .006 },
    { name: 'P1-418U', material: 'plastic', ced: 4, cel: 18, flutes: 1, angle: 'up', rpm: 50000, soft: .005, hard: .007 },
    { name: 'P1-518D', material: 'plastic', ced: 5, cel: 18, flutes: 1, angle: 'down', rpm: 40000, soft: .006, hard: .008 },
    { name: 'P1-518U', material: 'plastic', ced: 5, cel: 18, flutes: 1, angle: 'up', rpm: 50000, soft: .006, hard: .009 },
    { name: 'P1-613U', material: 'plastic', ced: 6, cel: 13, flutes: 1, angle: 'up', rpm: 50000, soft: .008, hard: .012 },
    { name: 'P1-613D', material: 'plastic', ced: 6, cel: 13, flutes: 1, angle: 'down', rpm: 50000, soft: .008, hard: .012 },
    { name: 'P1-625U', material: 'plastic', ced: 6, cel: 25, flutes: 1, angle: 'up', rpm: 50000, soft: .008, hard: .012 },
    { name: 'P1-625D', material: 'plastic', ced: 6, cel: 25, flutes: 1, angle: 'down', rpm: 50000, soft: .008, hard: .012 },
    { name: 'P2-418D', material: 'plastic', ced: 4, cel: 18, flutes: 2, angle: 'down', rpm: 50000, soft: .005, hard: .007 },
    { name: 'P2-418U', material: 'plastic', ced: 4, cel: 18, flutes: 2, angle: 'up', rpm: 60000, soft: .005, hard: .007 },
    { name: 'P2-520D', material: 'plastic', ced: 5, cel: 20, flutes: 2, angle: 'down', rpm: 50000, soft: .006, hard: .008 },
    { name: 'P2-520U', material: 'plastic', ced: 5, cel: 20, flutes: 2, angle: 'up', rpm: 60000, soft: .006, hard: .009 },
    { name: 'P2-613U', material: 'plastic', ced: 6, cel: 13, flutes: 2, angle: 'up', rpm: 60000, soft: .008, hard: .012 },
    { name: 'P2-625D', material: 'plastic', ced: 6, cel: 25, flutes: 2, angle: 'down', rpm: 50000, soft: .008, hard: .012 },
    { name: 'P2-625U', material: 'plastic', ced: 6, cel: 25, flutes: 2, angle: 'up', rpm: 60000, soft: .008, hard: .012 },
    { name: 'X2-418S', material: 'multipurpose', ced: 4, cel: 18, flutes: 2, angle: 'straight', rpm: 60000, soft: .006, hard: .008 },
    { name: 'X2-420D', material: 'multipurpose', ced: 4, cel: 20, flutes: 2, angle: 'down', rpm: 60000, soft: .006, hard: .008 },
    { name: 'X2-420U', material: 'multipurpose', ced: 4, cel: 20, flutes: 2, angle: 'up', rpm: 60000, soft: .006, hard: .008 },
    { name: 'X2-520C', material: 'multipurpose', ced: 5, cel: 20, flutes: 2, angle: 'compression', rpm: 50000, soft: .004, hard: .006 },
    { name: 'X2-625C', material: 'multipurpose', ced: 6, cel: 20, flutes: 2, angle: 'compression', rpm: 50000, soft: .006, hard: .010 },
    { name: 'X2-418S', material: 'multipurpose', ced: 4, cel: 18, flutes: 2, angle: 'straight', rpm: 60000, soft: .006, hard: .008 },
    { name: 'X2-625D', material: 'multipurpose', ced: 6, cel: 25, flutes: 2, angle: 'down', rpm: 50000, soft: .008, hard: .010 },
    { name: 'X2-625D', material: 'multipurpose', ced: 6, cel: 25, flutes: 2, angle: 'down', rpm: 50000, soft: .006, hard: .009 },
    { name: 'X2-625U', material: 'multipurpose', ced: 6, cel: 25, flutes: 2, angle: 'up', rpm: 50000, soft: .008, hard: .010 },
    { name: 'X2-650U', material: 'multipurpose', ced: 6, cel: 50, flutes: 2, angle: 'up', rpm: 40000, soft: .007, hard: .009 },

];

// When the user clicks anywhere outside of the modal or the "X", close modals
window.onclick = function (event) {

    if (event.target.id == "close1") {
        document.getElementById('myModal').style.display = "none";

    }

    if (event.target.id == "close2") {
        document.getElementById('myModal2').style.display = "none";

    }
    if (event.target.id == "close3") {
        document.getElementById('myModal3').style.display = "none";

    }

    if (event.target.id == "close4") {
        document.getElementById('myModal4').style.display = "none";

    }


    if (event.target == modal) {
        modal.style.display = "none";
        refreshPage();

    }

    if (event.target == modal2) {
        modal2.style.display = "none";
        refreshPage();

    }

    if (event.target == modal3) {
        modal3.style.display = "none";
        refreshPage();
    }

    if (event.target == modal4) {
        modal4.style.display = "none";
        refreshPage();
    }


    if (!event.target.matches('.materialButton')) {

        if (!created) {
            for (var i = 0; i < materials.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = materials[i].name;
                opt.value = materials[i].name;
                select.appendChild(opt);
            }
            created = true;
        }

    }

    selectMaterial.addEventListener('change', function () {

        thickness.style.visibility = "hidden";
        rpm.style.visibility = "hidden";
        bitList.style.visibility = "hidden";

        if (this.value != "Select Material") {
            thickness.style.visibility = "visible";
        }

    });

    var thickness = document.getElementById("thickness");

    enterThickness.addEventListener('change', function () {

        thicknessValue = document.getElementById('enterThickness').value;

        rpm.style.visibility = "hidden";
        bitList.style.visibility = "hidden";

        if (thicknessValue > 50) {
            window.alert("Please enter a lower material thickness.");
        }

        if (materialValue != "Select Material") {
            rpm.style.visibility = "visible";
        }

    });

    var rpm = document.getElementById("rpm");

    enterRPM.addEventListener('change', function enteredRPM() {

        rpmValue = document.getElementById('enterRPM').value;

        bitList.style.visibility = "hidden";

        if (rpmValue > 60000 | rpmValue < 5000) {
            window.alert("Please enter spindle RPM between 5,000 and 60,000.");
        }

        if (rpmValue != null) {
            bitList.style.visibility = "visible";
        }

    });

    bitsButton.onclick = (function () {

        var userInputArray = new Array;

        materialValue = document.getElementById("selectMaterial").value;

        userInputArray = [materialValue, thicknessValue, rpmValue];

        modal.style.display = "none";
        modal2.style.display = "visible";
        modal2.style.display = "block";

        document.getElementById('displayInput').innerHTML = "Compatible bits for" + " " + thicknessValue + " " + "mm" + " " + materialValue + " " +
            "at" + " " + rpmValue + " " + "RPM as follows;";

        var created2 = false;

        if (!created2) {

            const material = materials.find(item => item.name === materialValue);

            const selectedBits = bits.filter(bit =>
                (material.plastic && bit.material === 'plastic' && bit.cel >= thicknessValue) ||
                (material.metal && bit.material === 'metal' && bit.cel >= thicknessValue) ||
                (material.multipurpose && bit.material === 'multipurpose' && bit.cel >= thicknessValue)
            );

            if (selectedBits != undefined || selectedBits.length != 0) {
                for (var i = 0; i < selectedBits.length; i++) {
                    var opt = document.createElement('option');
                    opt.innerHTML = selectedBits[i].name;
                    opt.value = selectedBits[i].name;
                    select2.appendChild(opt);
                }

                if (selectedBits === undefined || selectedBits.length == 0) {
                    // array empty or does not exist
                    modal2.style.display = "none";
                    modal3.style.display = "visible";
                    modal3.style.display = "block";
                    noBits.style.visibility = 'visible';
                    startOverButton.style.visibility = 'visible';
                    created2 = false;
                };

            }


            selectBitButton.onclick = function () {
                modal2.style.display = "none";
                modal4.style.display = "visible";
                modal4.style.display = "block";
                displayBit.style.visibility = 'visible';


            //Not sure why but couldn't get this button to work but will explore issue later.
                startOverButton2.style.visibility = 'visible';

                bitValue = document.getElementById("displayBits").value;

                const selectedBit = selectedBits.find(bit => bit.name === bitValue);

                if (selectedBit.rpm >= rpmValue) {
                    rpmBit = rpmValue;
                }

                else { rpmBit = selectedBit.rpm }

                if (material.soft === true) {
                    hardness = selectedBit.soft;
                }

                else { hardness = selectedBit.hard }

                numPass = (Math.ceil(thicknessValue / (selectedBit.ced / selectedBit.flutes)));

                if (selectedBit.ced <= thicknessValue) {

                    passDepth = (Math.round(((thicknessValue / numPass) + Number.EPSILON) * 100) / 100);

                }

                else {
                    passDepth = thicknessValue;
                }

                feedRate = (selectedBit.flutes * rpmBit * hardness);

                document.getElementById("displayBit").innerHTML = "For processing of " + " " + "<strong>" + thicknessValue + "</strong>" + " " +
                    "<strong>mm</strong>" + " " + "<strong>" + materialValue + "</strong>" + " " +
                    "at up to " + "<strong>" + selectedBit.rpm + "</strong>" + " " + "<strong>RPM</strong>.<br/><br/>" +
                    "The " + selectedBit.name + " is a " + selectedBit.flutes +
                    "-flute, " + selectedBit.angle + " cut, milling bit for processing of " + material.name +
                    " up to " + selectedBit.cel + " mm thickness.<br/><br/>" +
                    "<strong>Processing Parameters:</strong><br/><br/>" +
                    "<strong>Number of Flutes:</strong> " + selectedBit.flutes + "<br/>" +
                    "<strong>Cutting Edge Diameter:</strong> " + selectedBit.ced + " mm<br/>" +
                    "<strong>Angle of Cut:</strong> " + selectedBit.angle + "<br/>" +
                    "<strong>Number of Passes:</strong> " + numPass + "<br/>" +
                    "<strong>Pass Depth:</strong> " + passDepth + " mm<br/>" +
                    "<strong>Feed Rate:</strong> " + feedRate + " mm/sec " + "@ " + rpmBit + " RPM";

            }

        }
        // was able to use the "if created" on the to clear the materials array but have not been able to do the same with the const.
        // in addition I tried to write two functions to clear selectedBit and selectedBits. Didn't work. Using a page refreshPage(); to accomplish.
        created2 = true;

    });

};