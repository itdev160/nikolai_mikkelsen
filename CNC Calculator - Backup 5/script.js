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

        var materials = ["Select Material", "Acrylic", "Aluminum", "Armed Graphite Gasket", "Hard Brass", "Hard Foam", "PVC", "Polycarbonate",
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


            // function Bits(name, material, ced, cel, angle, rpm, soft, hard) {
            //     this.name = name;
            //     this.material = material;
            //     this.ced = ced;
            //     this.cel = cel;
            //     this.angle = angle;
            //     this.rpm = rpm;
            //     this.soft = soft;
            //     this.hard = hard;
            // }

            // var M1-308U = new Bits('M1-308U', 'metal', 3, 8, 'up', 60000, .003, .005);

            var bits = [

            // First Character is the material, second is number of flutes, ignore hyphen, third is bit diameter, fourth and fifth is the cut length
            // sixth is the direction of cut. Then soft and hard chip loads.

            // Example (M1-308U) - material: metal, number of flutes: 1, cut diameter: 3mm, cut length: 08mm, cut angel: up, chip load: soft, chip load: hard.
            {name: 'M1-308U ', material: 'wood', ced: 3, cel: 8, angle: 'up', rpm: 60000, soft: .003, hard: .005}, 
            {name: 'M1-308UC', material: 'metal', ced: 3, cel: 8, angle: 'up', rpm: 60000, soft: .003, hard: .005}, 
            {name: 'M1-408U ', material: 'metal', ced: 4, cel: 8, angle: 'up', rpm: 60000, soft: .004, hard: .006},
            {name: 'M1-506D ', material: 'metal', ced: 5, cel: 6, angle: 'down', rpm: 50000, soft: .005, hard: .007},
            {name: 'M1-506U ', material: 'metal', ced: 5, cel: 6, angle: 'up', rpm: 56000, soft: .005, hard: .007}

            // ['M1-308U ', '60000', '.003', '.005'], ['M1-308UC', '60000', '.003', '.005'], ['M1-408U ', '60000', '.004', '.006'], 
            // ['M1-506D ', '50000', '.005', '.007'], ['M1-506U ', '55000', '.005', '.007'], ['M1-506UC', '50000', '.006', '.008'], ['M1-608U ', '50000', '.006', '.008'], 
            // ['M1-608UC', '50000', '.003', '.006'], ['M2-406U ', '50000', '.003', '.006'], ['M2-606U', '50000', '.005', '.007'], ['MZ-303U', '60000', '.003', '.005'], 
            // ['P1-208D ', '60000', '.003', '.005'], ['P1-208U ',  '60000','.003', '.005'], ['P1-306U ', '60000', '.004', '.006'],  ['P1-312D ', '60000', '.004', '.005'], 
            // ['P1-312U ', '60000', '.004', '.006'], ['P1-418D ', '40000','.005', '.006'], ['P1-418U ', '50000', '.005', '.007'], ['P1-518D ', '40000', '.006', '.008'], 
            // ['P1-518U ', '50000', '.006', '.009'], ['P1-613U ', '50000', '.008', '.012'], ['P1-625U ', '50000', '.008', '.012'], ['P1-625D ', '4 0000','.008', '.012'], 
            // ['P2-418D ', '50000','.005', '.007'], ['P2-418U ', '60000','.005', '.007'], ['P2-520D ', '50000', '.006', '.008'], ['P2-520U ', '60000', '.006', '.009'], 
            // ['P2-613U ', '60000', '.008', '.012'], ['P2-625D ', '50000', '.008', '.012'], ['P2-625U ', '60000', '.008', '.012'], ['X2-418S ', '60000', '.006', '.008'], 
            // ['X2-420D ', '60000', '.006', '.008'], ['X2-420U ', '60000', '.006', '.008'], ['X2-520C ', '50000', '.004', '.006'], ['X2-625C ', '50000', '.006', '.010'], 
            // ['X2-625D ', '50000', '.008', '.010'], ['X2-625S ', '50000', '.006', '.009'], ['X2-625U ', '50000', '.008', '.010'], ['X2-650U ', '40000', '.007', '.009']

        ];

        bits.splice(0, 0, "Select Bit");

        var created = false;
        
        var select = document.getElementById('displayBits');

        if (!created) {

            for (var i = 0; i < bits.length; i++) {
                if (bits[i].material === 'metal' & materialValue === 'Aluminum' ){
                var opt = document.createElement('option');
                opt.innerHTML = bits[i].name;
                opt.value = bits[i].material;
                select.appendChild(opt);

                }
            }

            created = true;
        }
            console.log(select)
    });

    // printBits(bitsArray);

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