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

var bitsEnter = document.getElementById(bitsButton);

let bitsArray = [

    // First Character is the material, second is number of flutes, ignore hyphen, third is bit diameter, fourth and fifth is the cut length
    // sixth is the direction of cut.

    // Example (M1-308U) - material: metal, number of flutes: 1, cut diameter: 3mm, cut length: 08mm, cut angel: up

    ['M1-308U'], ['M1-308UC'], ['M1-408U'], ['M1-506D'], ['M1-506U'], ['M1-506UC'], ['M1-608U'], ['M1-608UC'], ['M2-406U'], ['M2-606U'],
    ['MZ-303U'], ['P1-208D'], ['P1-208U'], ['P1-306U'], ['P1-312D'], ['P1-312U'], ['P1-418D'], ['P1-418U'], ['P1-518D'], ['P1-518U'],
    ['P2-418D'], ['P2-418U'], ['P2-520D'], ['P2-520U'], ['P2-613U'], ['P2-625D'], ['P2-625U'], ['X2-418S'], ['X2-420D'], ['X2-420U'],
    ['X2-520C'], ['X2-625C'], ['X2-625D'], ['X2-625S'], ['X2-625U']

];

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


        function printBits(bitsArray) {


            var bits = document.getElementById('displayBits');

            for (var i = 0; i < bitsArray.length; i++) {
                var bit = document.createElement("li");
                bit.innerHTML = bitsArray[i];
                bit.value = bitsArray[i];
                bits.appendChild(bit);

            }

        }

        printBits(bitsArray);

    });

};

printArray(parentArray);


    // bitsButton.addEventListener('click', function () {
    //     window.alert(materialValue, thicknessValue, rpmValue);
    // });






//Array for user defined RPM
// var spindleMaxRPM = [];

// //Array to hold thickness

// var thickness = [];

//Array to hold materials

// let materialGroup = [

//     ['Board, Rigid'],
//     ['Board, Soft'],
//     ['Flexible Material'],
//     ['Foil/Vinyl'],
//     ['Leather'],
//     ['Textile']

// ];

// let boardRigid = [

//     ['Acrylic'],
//     ['Aluminum'],
//     ['Aluminum Composite'],
//     ['Armed Graphite Gasket'],
//     ['Hard Brass'],
//     ['Hard Foam'],
//     ['PVC'],
//     ['Polycarbonate'],
//     ['Polypropylene'],
//     ['Wood']

// ];

// //Array to hold bits

// let Bits = [
//     ['']
// ];

// function filterBoardRigid

// function addMaterialThickness(params) {

// }



// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }