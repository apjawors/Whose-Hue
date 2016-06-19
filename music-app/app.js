SC.initialize({
    client_id: '9c67ba2d7fff6ccf927f2054900ee923',
    redirect_uri: '51a5e12e2d172d8a48a9bdfd6bff5c60'
});

$(document).ready(function() { 
    
    $('button').click(function(){
        var $value = $('input').val();
        SC.get('/tracks', {
            q: $value, license: 'cc-by-sa'
        }).then(function(tracks) {
            console.log(tracks);
            var u = tracks[1].uri;
            var url = u.substring(26);
            SC.stream(url).then(function(player){
                player.play();
            })
        });
    });
});