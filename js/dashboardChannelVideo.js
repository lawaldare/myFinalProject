var channelName = 'UC8butISFwT-Wl7EV0hUK0BQ';  
var vidHeight = 400;  
var vidWidth = 500;  
var vidMaxResult = 20; // Maximum can be 50
  
$(document).ready(function () {  
    $.get(
        "https://www.googleapis.com/youtube/v3/channels", {  
        part: 'contentDetails',  
        forUsername: channelName,  
        key: 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs'},  
        function (data) {  
            $.each(data.items, function (i, item) {  
                console.log(item); // See in Browser Console  
                pid = item.contentDetails.relatedPlaylists.uploads;  
                getVideos(pid);  
            })  
        }  
    );  
    function getVideos(pid) { 
    $.get(
            "https://www.googleapis.com/youtube/v3/playlistItems", {  
            part: 'snippet',  
            maxResults: 50,  
            playlistId: pid,  
            key: 'AIzaSyDAg_JYmtAbIcNRgywofmxczJPMmpMuTLs'},
            function (data) {  
                var outputVideo;  
                $.each(data.items, function (i, item) {  
                    console.log(item);
                    videoTitle = item.snippet.title; 
                    videoId = item.snippet.resourceId.videoId; 
                    //outputVideo = '<li>'+videoTitle+'</li>';
                    outputVideo = '<li><iframe height="' + vidHeight + '" width="' + vidWidth + '" src=\"//www.youtube.com/embed/' + videoId + '"> </iframe></li>';  
  
               //Append to result list  
               $('#results').append(outputVideo);  
           })  
       }  
       );  
    }    
});

