// Get the modal
var modal = document.getElementById("myModal");

var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var startButton = document.getElementById("startButton");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
startButton.onclick = function () {
    enterThickness.value = null;
    enterRPM.value = null;
    selectMaterial.value = "Select Material";
    thickness.style.visibility = "hidden";
    rpm.style.visibility = "hidden";
    bitList.style.visibility = "hidden";
    modal.style.display = "block";
    displayBits.value = null;
    displayBits.value = "Select Bit";
    //startOverButton.style.visibility = "hidden",

}

// When the user clicks on <span> (x), close the modal
span.onclick = function (event) {

    if (event.target = modal) {
        modal.style.display = "none";
    }

    if (event.target = modal2) {
        modal2.style.display = "none";
    }
}

var created = false;

var materialValue;
var materialSelected = document.getElementsByClassName(selectMaterial);

var thicknessValue;
var enteredThickness = document.getElementById(enterThickness);

var rpmValue;
var enteredRPM = document.getElementById(enterRPM);

// var bits = document.getElementById(bitsButton);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

    if (event.target == modal) {
        modal.style.display = "none";


    }

    if (event.target == modal2) {
        modal2.style.display = "none";

    }

    if (!event.target.matches('.materialButton')) {

        var materials = [ {name: "Select Material"}, {name: "Acrylic", multipurpose: true, plastic: true, soft: false, hard: true }, 
        {name: "Aluminum", material: 'metal', soft: true}, "Armed Graphite Gasket", "Hard Brass", "Hard Foam", "PVC", "Polycarbonate",
            "Polypropylene", "Wood"];
        var select = document.getElementById('selectMaterial');
        if (!created) {
            for (var i = 0; i < materials.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = materials[i];
                opt.value = materials[i];
                select.appendChild(opt);
            }
            created = true;
        }

    }

    selectMaterial.addEventListener('change', function materialSelected() {

        materialValue = document.getElementById("selectMaterial").value;

        thickness.style.visibility = "hidden";
        rpm.style.visibility = "hidden";
        bitList.style.visibility = "hidden";

        if (this.value != "Select Material") {
            thickness.style.visibility = "visible";
        }

    });

    var thickness = document.getElementById("thickness");

    enterThickness.addEventListener('change', function enteredThickness() {

        thicknessValue = document.getElementById('enterThickness').value;

        rpm.style.visibility = "hidden";
        bitList.style.visibility = "hidden";

        if (thicknessValue > 50) {
            window.alert("Please enter a lower material thickness.");
        }

        if (materialValue != "Select Material") {
            rpm.style.visibility = "visible";
        }

        // window.alert(thicknessValue);

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

        userInputArray = [materialValue, thicknessValue, rpmValue];

        // window.alert(userInputArray.join("\n"));

        modal.style.display = "none";
        modal2.style.display = "visible";
        modal2.style.display = "block";

        document.getElementById('displayInput').innerHTML = 'Compatible bits for' + " " + thicknessValue + " " + "mm" + " " + materialValue + " " +
            "at" + " " + rpmValue + " " + "RPM as follows;";


        var bits = [

            // First Character is the material, second is number of flutes, ignore hyphen, third is bit diameter, fourth and fifth is the cut length
            // sixth is the direction of cut. Then soft and hard chip loads.

            // Example (M1-308U) - material: metal, number of flutes: 1, cut diameter: 3mm, cut length: 08mm, cut angel: up, chip load: soft, chip load: hard.
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
            { name: 'X2-418S', material: 'multi-purpose', ced: 4, cel: 18, flutes: 2, angle: 'straight', rpm: 60000, soft: .006, hard: .008 },
            { name: 'X2-420D', material: 'multi-purpose', ced: 4, cel: 20, flutes: 2, angle: 'down', rpm: 60000, soft: .006, hard: .008 },
            { name: 'X2-420U', material: 'multi-purpose', ced: 4, cel: 20, flutes: 2, angle: 'up', rpm: 60000, soft: .006, hard: .008 },
            { name: 'X2-520C', material: 'multi-purpose', ced: 5, cel: 20, flutes: 2, angle: 'compression', rpm: 50000, soft: .004, hard: .006 },
            { name: 'X2-625C', material: 'multi-purpose', ced: 6, cel: 20, flutes: 2, angle: 'compression', rpm: 50000, soft: .006, hard: .010 },
            { name: 'X2-418S', material: 'multi-purpose', ced: 4, cel: 18, flutes: 2, angle: 'straight', rpm: 60000, soft: .006, hard: .008 },
            { name: 'X2-625D', material: 'multi-purpose', ced: 6, cel: 25, flutes: 2, angle: 'down', rpm: 50000, soft: .008, hard: .010 },
            { name: 'X2-625D', material: 'multi-purpose', ced: 6, cel: 25, flutes: 2, angle: 'straight', rpm: 50000, soft: .006, hard: .009 },
            { name: 'X2-625U', material: 'multi-purpose', ced: 6, cel: 25, flutes: 2, angle: 'up', rpm: 50000, soft: .008, hard: .010 },
            { name: 'X2-650U', material: 'multi-purpose', ced: 6, cel: 50, flutes: 2, angle: 'straight', rpm: 40000, soft: .007, hard: .009 }

        ];

        bits.splice(0, 0, "Select Bit");

        var created = false;

        var select = document.getElementById('displayBits');

        var noBits = document.getElementById('noBits');
        var startOver = document.getElementById('startOver');

        if (!created) {

            for (var i = 0; i < bits.length; i++) {
                if (bits[i].material === 'metal' & materialValue === 'Aluminum' & thicknessValue <= bits[i].cel) {
                    var opt = document.createElement('option');
                    opt.innerHTML = bits[i].name;
                    opt.value = bits[i].material;
                    select.appendChild(opt);

                    noBits.style.visibility = 'hidden';
                    startOver.Button.style.visibility = 'hidden';

                }

                else {

                    document.getElementById('displayBits');
                    document.getElementById('selectBits');

                    displayBits.style.visibility = 'hidden';
                    selectBitsButton.style.visibility = 'hidden';
                    noBits.style.visibility = 'visible';
                    startOver.style.visibility = 'visible';
                }

            }

            created = true;
        }


        console.log(select)
    });

};




// public double passDepth(Bit finalBit, double materialThickness) {

//     if (finalBit.dia < materialThickness) {
//         passDepth = (round(materialThickness) / (ceil(materialThickness / finalBit.dia)));
//         passDepth = (passDepth / finalBit.flutes);
//     } else {
//         passDepth = (finalBit.dia);

//     }
//     return passDepth;

// }

// public double noPass(double materialThickness) {
//     noPass = (materialThickness) / (passDepth);
//     return noPass;

// }