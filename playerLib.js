window.player=//object
{
    butn: document.getElementById("toglButn"),


    init: function()
    {
        // validation .. detect error .. saves time in debugging later
        if(((typeof mp3File)=="undefined")||!mp3File) // check if global is defined
        {console.error("global var `mp3File` is invalid"); return}; // prevent errors 
        if(!this.butn){console.error(" element `#toglButn` is undefined"); return}; // safety first
        // return (above) if invalid, no need to wrap inside `if` block .. less indentation = cleaner code
        // -----------------------



        // initialize audio object
    	this.audi = (new Audio(mp3Audio));
        // -----------------------


        // listen on events
        this.butn.addEventListener("click",function(){
    		if(player.playing){
    			player.audi.pause(); 
    			return;
    		}; 
    		player.audi.play()
    	});

    	this.audi.addEventListener("canplaythrough",function(){
    		player.ready=1;
    	});
    
    	this.audi.addEventListener("play",function(){
    		player.playing=1;
			localStorage.setItem("autoPlay","true");
    		player.butn.value="pause";
    	});
    
    	this.audi.addEventListener("pause",function(){
    		player.playing=0;
			localStorage.setItem("autoPlay","false");
    		player.butn.value="play";
    	});
        // -----------------------


        // if remember playing last then play now .. if browser allows
    	if(localStorage.getItem("autoPlay")=="true"){
            player.play();
		}
        // -----------------------
    },
};


player.init();
