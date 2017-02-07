var request = new XMLHttpRequest();
request.open('GET',  'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
request.onreadystatechange = function() {
  if((request.status == 200) && (request.readyState == 4)) {

    json_data =  JSON.parse(request.response);
    var movies = "Movies filmed at the Golden Gate Bridge:<br/>";
    for(var movie in json_data.data){
			var data = json_data.data[movie];
      if (data[10] == "Golden Gate Bridge") {

        movies += data[8] + "made in " + data[9] + " and produced by " + data[13] + "<br/>";


      }
    }
    document.getElementById("result").innerHTML += movies;
}



}
request.send();
