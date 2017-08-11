

$(document).ready(function() {

  var api;
  var search;

  $('#searchBtn').click(function() {
     $("li").remove(); //remove previous
    search = $('#search').val();  //search value obtained from input tag to insert in the api url
    api = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&callback=?';

    $.ajax({
      type: "GET",
      url: api,
      async: false,
      dataType: "json",
      success: function(data) {

        //data[1][0] is title with first element
        //data[2][0] is description
        //data[3][0] is link
        for( var i =0; i <data[1].length;++i){
          $(" #out").append("<li>'<a href="+ data[3][i]+" target='_blank'>"+ "<h3> " + data[1][i]+  "</h3>"+ '</a>'+ "<h5>"+data[2][i]+ "</h5" + "</li>") //test and trials
        
        }
    
      },
      error: function(errorMessage) {
        alert("Error");
      }
    });
  });


});