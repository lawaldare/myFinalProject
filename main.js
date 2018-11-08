
// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg


$(document).ready(function () {
/*
    var key = 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs';
    var playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 20,
        playlistId: playlistId
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }

		// CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });
*/
var maxVideos = 5;

$.get(
    "https://www.googleapis.com/youtube/v3/videos",{
      part: 'snippet',
      chart: 'mostPopular',
      kind: 'youtube#videoListResponse',
      maxResults: maxVideos,
      //regionCode: 'IN',
      key: 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs'},
      function(data){
        var output;
        $.each(data.items, function(i, item){
          console.log(item);
          videTitle = item.snippet.title;
                description = item.snippet.description;
                thumb = item.snippet.thumbnails.high.url;
                channelTitle = item.snippet.channelTitle;
                videoDate = item.snippet.publishedAt;
                vidId = item.snippet.resourceId.videoId;
                Catagoryid = item.snippet.categoryId;
                cID = item.snippet.channelId;
          output = '<div class="maindiv"><div>' +
                        '<a data-fancybox-type="iframe" class="fancyboxIframe" href="watch.php?v=' + vidId + '" target="_blank" ><img src="' + thumb + '" class="img-responsive thumbnail" ></a>' +
                        '</div>' +
                        '<div class="input-group col-md-6">' +
                            '<h3 class="Vtitle"><a data-fancybox-type="iframe" class="fancyboxIframe" href="watch.php?v=' + vidId + '" target="_blank">' + videTitle + '</a></h3>'+
                        '</div><div  id="cTitle"><a href="https://www.youtube.com/channel/'+cID+'" target="_blank">'+channelTitle+'</a></div></div>' +
                    '<div class="clearfix"></div>';
          $('#trending').append(output);
        })

      }
    );


});

