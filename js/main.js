$(document).ready(function() {

  $("#citySelect").change(function(e) {
    $("#citySelect").removeClass('emptyField');
  });


  $("#submit").click(function(e) {
    $(".map-div").children().remove();
    if (!isValidate()) {
      $("img").removeClass('hidden');      
      $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?id=" + $("#citySelect").val() + "&appid=e8d888759615d969b1e7688c392f6bd9",
        dataType: "json",
        success: function(result, status, xhr) {
          $("img").addClass('hidden');
          $(".header-text").removeClass('hidden');
          $(".map-div").append("<iframe src=https://www.google.com/maps/embed/v1/place?key=AIzaSyDoAfhx7QegzuX6HpNXiVOvs36k64MwW24&amp;q="+ result['city']['coord']['lat'] +","+ result['city']['coord']['lon'] +" width='300' height='300' frameborder='0' style='border:0' allowfullscreen></iframe>");
          var table = $("<table class='table' align='center'><tr></tr>");
          table.append("<tr><td class='td-city'>City</td><td class='td-country'>Country</td></tr>");
          table.append("<tr><td>" + result["city"]["name"] + "</td><td>" + result["city"]["country"] + "</td></tr>");
          $.each(result["list"], function(i, list) {
            table.append("<tr><td class='td-date'>Date:</td><td class='td-date'>" + list["dt_txt"] + "</td></tr>");
            table.append("<tr><td>Current Temperature:</td><td>" + list.main["temp"] + "°C</td></tr>");
            table.append("<tr><td>Current Min-Temperature:</td><td>" + list["main"]["temp_min"] + "°C</td></tr>");
            table.append("<tr><td>Current Max-Temperature:</td><td>" + list["main"]["temp_max"] + "°C</td></tr>");
            table.append("<tr><td>Current Humidity:</td><td>" + list["main"]["humidity"] + "</td></tr>");
            $.each(list["weather"], function(i, weather) {
              table.append("<tr><td>Weather:</td><td>" + weather["main"] + "</td></tr>");
              table.append("<tr><td>Weather Description:</td><td>" + weather["description"] + "</td></tr>");
            });
          });
          $("#dataDiv").html(table);
        },
        error: function(xhr, status, error) {
          alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
      });
    }
  });   
  function isValidate() {
    var isValid = true;     
    if ($("#citySelect").val().trim() == 'Select') 
    {
      $("#citySelect").addClass('emptyField');
    }
    else{
      $("#citySelect").removeClass('emptyField');
      isValid = false;
    }
    return isValid;
  }
});