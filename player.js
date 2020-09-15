
window.player=//object
{
    fail:function(mesg){console.error(window.location.href,mesg);},


    init:function()
    {
        var dlim = "$file/";
        var href = window.location.href;  if(href.indexOf(dlim)<0){this.fail("nothing to play"); return};
        var file = href.split("$file/").pop();

        this.butn = document.createElement("img");
        this.butn.src = "/image/play.png";
        this.butn.onclick = function(){if(player.playing){player.audi.pause(); return}; player.audi.play()};
        document.body.appendChild(this.butn);

        this.path = ("/sound/"+file);
        this.audi = (new Audio(this.path));
        this.wait = setInterval(function()
        {
            if(!player.ready){return};
            if(player.playing){clearInterval(player.wait);};
            player.audi.play();
        },250);

        this.audi.addEventListener("canplaythrough",function(){player.ready=1;});
        this.audi.addEventListener("play",function(){player.playing=1; player.butn.src="/image/pause.png";});
        this.audi.addEventListener("pause",function(){player.playing=0; player.butn.src="/image/play.png";});
    },
};


player.init();
