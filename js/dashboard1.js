  var vidHeight = 400;  
  var vidWidth = 500;
  var region = prompt('choose the region of your choice, e.g. NG for Nigeria, IN for India, US for USA').toUpperCase();  
$(document).ready(function () {  

 $.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: 20,
      regionCode: region,
      key: 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs'},
      function(data){
        var output;
        $.each(data.items, function(i, item){
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.id;

            $('#results').append(`<div class="row">
                            <div class="col-md-12 mb-4">
							<article class="item" data-key="${vid}">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>
                                <iframe width="700" height="700" src="https://www.youtube.com/embed/${vid}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
							</article>
                            </div>
                            </div>
						`);
        })

      }
    );      
});

