// 1.atrast input lauku ar ID
// 


// $('#some-input').keyup(function() {

//     var currentValue=$(this).val()
//     $('#some-heading').html(currentValue)
// })

// piespiežot escape podziņu nodzēšās
// $('#some-input').keyup(function (event) {
//     if (event.keyCode == 27) {
//         $(this).val('')
//     }
//     console.log(event)
//     var currentValue = $(this).val()
//     $('#some-heading').html(currentValue)
// })

// 1.jadabu poga pēc id
// $('#some-button').click(function (){
// var newP = $('<p>Bar</p>')
// $('#wrapper').append(newP);
// })


// 1.jadabu poga pēc id
$('#some-button').click(function () {
    var currentText = $('#some-username').val()
    var date = new Date();
    var dateFormat = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + '.' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    var newP = $('<p>' + currentText + ' '+  ' '+  ' '+ '<small>' + dateFormat + '</small>'+'</p>')
    $('#wrapper').append(newP);
})

$('#some-button').click(function () {
    var currentText = $('#some-input').val()
    var newP = $('<p>' + currentText + '<hr>' + '</p>')
    $('#wrapper').append(newP);
})







//     $('#some-input').keyup(function(event) {
//         if(event.keyCode ==27) {
//             $(this).val('')
//         }
//         console.log(event)
//         var currentValue=$(this).val()
//         $('#some-heading').html(currentValue)
//     })


// ja piespiež eneter

// $('#some-input').keyup(function (event) {
//     if (event.keyCode == 13) {
//         var currentText = $('#some-input').val()
//         var newP = $('<p>' + currentText + '</p>')
//         $('#wrapper').append(newP);
//     }
// })



// $('#some-input').keyup(function () {
//     var currentValue = $(this).val()
//     $('#some-heading').html(currentValue)
// })

// $('#some-input').keyup(function (event) {
//     if (event.keyCode == 13) {
//         $(this).val('')
//     }
//     console.log(event)
//     var currentValue = $(this).val()
//     $('#some-heading').html(currentValue)
// })




// JĀŅA RAKSTĪTAIS RISINĀJUMS

// $('#some-input2').keuyp(function()
// {
//     if(e.keyCode == 13) {

//     }
//     var currentText = $(this)
//     .val('#some-heading').html(currentText)
// })