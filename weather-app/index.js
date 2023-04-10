$(document).ready(function () {
  var weatherAPIKey = "6e8813b7d2a2ec1534701447e384918c";
  var formElement = $("form");

  // change border color when focused out of input field:
  $("form input").on("blur", function () {
    $(this).css("border-color", "blue");
  });
  // Trigger background transition when button is clicked:
  // $("button").on("click", function () {
  //   $("body").toggleClass("bg-transition");
  //   console.log("this transition worked");
  // });

  formElement.submit(function (submitEvent) {
    var cityInputValue = $("#city").val();
    console.log({ cityInputValue });
    submitEvent.preventDefault();
    // change border color if input field is in focus:  <-- not working!
    if (cityInputValue.length > 0) {
      $("form input").change("focus", function () {
        $(this).css("border-color", "red");
      });
      console.log("this is true");
      // console log shows it's working but the border color doesnt change
    }

    $.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityInputValue}&appid=${weatherAPIKey}`,
      function (data) {
        console.log(data);
        $("#weather-data").html(
          `<p>> temp: ${data.main.temp}</p> <p>> feels like: ${data.main.feels_like}</p> <p>> clouds: ${data.weather[0].description}</p>`
        );
        if (data.main.temp >= 11 && data.main.temp < 12) {
          $("body").css("background", "#00FFCC");
        } else if (data.main.temp >= 10 && data.main.temp < 11) {
          $("body").css("background", "#00FF7F");
        } else if (data.main.temp >= 9 && data.main.temp < 10) {
          $("body").css("background", "#00EEEE");
        } else if (data.main.temp >= 8 && data.main.temp < 9) {
          $("body").css("background", "#00CD00");
        } else if (data.main.temp >= 7 && data.main.temp < 8) {
          $("body").css("background", "#00CD66");
        } else if (data.main.temp >= 6 && data.main.temp < 7) {
          $("body").css("background", "#009900");
        } else if (data.main.temp >= 5 && data.main.temp < 6) {
          $("body").css("background", "#00AF33");
        } else if (data.main.temp >= 4 && data.main.temp < 5) {
          $("body").css("background", "#00B2EE");
        } else if (data.main.temp >= 3 && data.main.temp < 4) {
          $("body").css("background", "#008080");
        } else if (data.main.temp >= 2 && data.main.temp < 3) {
          $("body").css("background", "#00688B");
        } else if (data.main.temp >= 1 && data.main.temp < 2) {
          $("body").css("background", "#006400");
        } else if (data.main.temp >= 0 && data.main.temp < 1) {
          $("body").css("background", "#003F87");
        } else if (data.main.temp >= -1 && data.main.temp < 0) {
          $("body").css("background", "#0000FF");
          $(".container").css("border-color", "#adff2f");
        } else {
          $("body").css("background", "aliceblue");
        }
      }
    );
  });
});

// Tasks:
// 1./ DONE - Collect the user input (or user selection), and save it to a variable
// 2./ DONE - Edit your code so your saved user input is added to the URL you're using in your GET request
// 3./ DONE - console.log the response and, using the Chrome Developer Tools, double check that the response matches the values you're inputting into the search bar

// Remaining Issues:
// 1. On focus is not working - not changing colour (but seems to work when you right click link?)
// 2. the onclick background transition isnt very smooth (even though i set the transition time to 6s)
