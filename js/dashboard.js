
$(document).ready(function () {

    var key = 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs';
    var playlistId = 'PLA-94DyrXTGigxYXPXnRXDDSZ-K0sJxMn';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        playlistId: playlistId
    }

    loadVids();
    let playListRandom = Math.floor(Math.random() * 50);
    function loadVids() {
        $.getJSON(URL, options, function (data) {
            var vid = data.items[playListRandom].snippet.resourceId.videoId;
            mainVid(vid);
            resultsLoop(data);
        });
    }

    function mainVid(vid) {
        $('#video').html(`
					<iframe width="560" height="315" src="https://www.youtube.com/embed/${vid}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            //var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;

            $('#main').append(`<div class="row">
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
        });
    }

		// CLICK EVENT
    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });

});

