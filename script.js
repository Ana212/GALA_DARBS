// function myFunction() {
//     // Get the checkbox
//     var checkBox = document.getElementById("myCheck");
//     // Get the output text
//     var text = document.getElementById("boo");

//     // If the checkbox is checked, display the output text
//     if (checkBox.checked == false) {
//         text.style.display = alert('Check box not checked!');
//     } else {
//         text.style.display = "none";
//     }
// }


// $('#myCheck').click(function() {
//     if ($(this).is(':checked'));
//     else {
//         alert('Our checkbox is not checked!');

//     }
// })

$('#reset').click(function () {
    if (!$('#myCheck').is(':checked')) {
        alert('Check box is not checked!');
        return false;
    }
});