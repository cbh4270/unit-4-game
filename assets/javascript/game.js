$(document).ready(function () {

  var counter = 0
  var wins = 1
  var loses = 1


  

    var targetNumber = (Math.round(Math.random() * 120) + 19)  
    
    $("#number-to-guess").text(targetNumber);

    var valueGem1 = Math.floor((Math.random() * 12) + 1);
    var valueGem2 = Math.floor((Math.random() * 12) + 1);
    var valueGem3 = Math.floor((Math.random() * 12) + 1);
    var valueGem4 = Math.floor((Math.random() * 12) + 1);

    console.log(valueGem1, valueGem2, valueGem3, valueGem4)



  $("#gem-image1").on("click", function () {
    counter = counter + valueGem1;
    $("#new-score").text(counter)
    if (counter === targetNumber) {

      alert("You win!");
      $("#wins").text(wins++);
     // $(targetNumber).text.reset();
      
    }

    else if (counter > targetNumber) {


      alert("You lose!!");
      $("#loses").text(loses++);
      //$(targetNumber).text.reset();
    }



  })

  $("#gem-image2").on("click", function () {
    counter = counter + valueGem2;
    $("#new-score").text(counter)
    if (counter === targetNumber) {

      alert("You win!");
      $("#wins").text(wins++)
      
      
    }

    else if (counter > targetNumber) {


      alert("You lose!!");
      $("#loses").text(loses++)
    }

  })
  $("#gem-image3").on("click", function () {
    counter = counter + valueGem3;
    $("#new-score").text(counter)
    if (counter === targetNumber) {

      alert("You win!");
      $("#wins").text(wins++)
    }

    else if (counter > targetNumber) {


      alert("You lose!!");
      $("#loses").text(loses++)
    }

  })
  $("#gem-image4").on("click", function () {
    counter = counter + valueGem4;
    $("#new-score").text(counter)
    if (counter === targetNumber) {

      alert("You win!");
      $("#wins").text(wins++)
    }

    else if (counter > targetNumber) {


      alert("You lose!!");
      $("#loses").text(loses++)
    }

  })



//  #gems {
//  display: flex;
//  justify-content: space-between;
 // width: 300px;
//  height: 300px;





})




