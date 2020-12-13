// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var startButton = document.getElementById("startButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
startButton.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";


}
var created = false;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {

    if (event.target == modal) {
        modal.style.display = "none";
        

    }
    if (!event.target.matches('.materialButton')) {
        var materials = ["Acrylic", "Aluminum", "Armed Graphite Gasket", "Hard Brass", "Hard Foam", "PVC", "Polycarbonate",
            "Polypropylene", "Wood"];
        var sel = document.getElementById('myDropdown');
        if (!created)
        {
            for (var i = 0; i < materials.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = materials[i];
                opt.value = materials[i];
                sel.appendChild(opt);
            }
            created = true;
        }

    }
}



function materialButton() {
    document.getElementById("myDropdown").classList.toggle("show");
}

 // var material = document.getElementById("material");
        // var options = ["1", "2", "3", "4", "5"];

        // function showMaterials() {

        //     for (var i = 0; i < options.length; i++) {
        //         var opt = options[i];
        //         var el = document.createElement("div");
        //         el.textContent = opt;
        //         el.value = opt;

        //         material.appendChild(el);
        //     }
        // }
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

