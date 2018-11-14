  var vidHeight = 400;  
  var vidWidth = 500;
  //var region = prompt('choose your trending video region, e.g. NG for Nigeria, IN for India, US for USA', 'NG').toUpperCase();  
  //var selectedValue = 'NG';
$(document).ready(function () {  
 $.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: 30,
      regionCode: 'NG',
      key: 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs'},
      function(data){
        //var output;
        $.each(data.items, function(i, item){
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 250);
            var vid = item.id;
            $('#results').append(`
            <div class="row" style="border-bottom: 3px solid white; margin-bottom: 20px;">
                <div class="col-md-12 mb-4">
							      <article class="item" data-key="${vid}">
                        <iframe width="700" height="700" src="https://www.youtube.com/embed/${vid}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
							      </article>
                </div>
                <div class="details">
                    <h4 style="padding-left:20px; font-weight: bold;">${title}</h4>
                    <p style="padding-left:20px;">${desc}</p>
							  </div>
            </div>
						`);
        })

      }
    );
$('#target').change(function(){
    var selectedValue = $('#target').val();
    $.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: 30,
      regionCode: selectedValue,
      key: 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs'},
      function(data){
        $('#results').empty();
        $.each(data.items, function(i, item){
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.id;
            $('#results').append(
              `<div class="row" style="border-bottom: 2px solid red; margin-bottom: 20px;">
                  <div class="col-md-12 mb-4">
							        <article class="item" data-key="${vid}">
                        <iframe width="700" height="700" src="https://www.youtube.com/embed/${vid}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
							        </article> 
                  </div>
                  <div class="details">
									    <h4 style="padding-left:20px; font-weight: bold;">${title}</h4>
									    <p style="padding-left:20px;">${desc}</p>
								  </div>
              </div>
						`);
        })

      }
    );  
  }); 

        
});

