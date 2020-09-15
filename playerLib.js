window.player=//object
{
    path:
    {
        fake:"http://anon.rendr.org/whatever.html/$file/audio4.mp3",
        real:"/sound/",
    },

    init:function()
    {
        var dlim = "$file/";
        var file = this.path.fake.split("$file/").pop();  // ??

        this.audi = (new Audio(this.path.real+file));
        this.wait = setInterval(function()
        {
            if(!player.ready){return};
            if(player.playing){clearInterval(player.wait);};
            player.audi.play();
        },250);

        this.butn = document.createElement("img");
        this.butn.src = "/image/play.png";
        this.butn.onclick = function(){if(player.playing){player.audi.pause(); return}; player.audi.play()};
        document.body.appendChild(this.butn);

        this.audi.addEventListener("canplaythrough",function(){player.ready=1;});
        this.audi.addEventListener("play",function(){player.playing=1; player.butn.src="/image/pause.png";});
        this.audi.addEventListener("pause",function(){player.playing=0; player.butn.src="/image/play.png";});
    },
};


player.init();

console.log(player.path);
