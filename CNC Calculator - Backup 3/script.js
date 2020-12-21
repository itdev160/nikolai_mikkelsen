// Get the modal
var modal = document.getElementById("myModal");

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
span.onclick = function () {
    modal.style.display = "none";

}

//Get the button the checks for bit compatibility
// var getBits = document.getElementsById("getBits");

var created = false;

var materialValue;
var materialSelected = document.getElementsByClassName(selectMaterial);

var thicknessValue;
var enteredThickness = document.getElementById(enterThickness);

var rpmValue;
var enteredRPM = document.getElementById(enterRPM);

var bitsEnter = document.getElementById(bitsButton);




// var userInputArray;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

    if (event.target == modal) {
        modal.style.display = "none";
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

        // materialSelected = selectMaterial.value;

    });

    var thickness = document.getElementById("thickness");

    // document.getElementById("selectMaterial").onchange = function () {

    //     if (this.value != "Select Material") {
    //         thickness.style.visibility = "visible";
    //     }

    // };

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

        // rpm.style.visibility = "visible";
        // window.alert(thicknessValue);

    });

    var rpm = document.getElementById("rpm");

    enterRPM.addEventListener('change', function enteredRPM() {

        rpmValue = document.getElementById('enterRPM').value;

        bitList.style.visibility = "hidden";

        // bitList.style.visibility = "hidden";

        if (rpmValue > 60000 | rpmValue < 5000) {
            window.alert("Please enter spindle RPM between 5,000 and 60,000.");
        }

        if (rpmValue != null) {
            bitList.style.visibility = "visible";
        }

    });

    bitsButton.onclick = (function (event) {

        var userInputArray = new Array;

        userInputArray = [materialValue, thicknessValue, rpmValue];

        window.alert(userInputArray.join("\n"));
        });
       
    };

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