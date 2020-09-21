window.player=(function()
{
// defn :: elements : define elements we need .. make them become one
// --------------------------------------------------------------------------------------
    this.butn = document.getElementById("toglButn");        // the button
    this.audi = (new Audio(this.butn.getAttribute("url"))); // the audio
    this.butn.audi = this.audi; // one belongs to the other
    this.audi.butn = this.butn; // the other belongs to one
// --------------------------------------------------------------------------------------


// evnt :: button : all button-related events
// --------------------------------------------------------------------------------------
    this.butn.addEventListener("click",function()
    {
        if(this.audi.wait){return}; // don't click me, i'm busy
        if(this.audi.actv){this.audi.pause(); this.audi.actv=0; return}; // pause
        this.audi.play(); this.audi.actv=1; // play
    });

    this.butn.addEventListener("blur",function()
    {this.audi.pause(); this.audi.actv=0;});
// --------------------------------------------------------------------------------------


// evnt :: audio : all audio-related events
// --------------------------------------------------------------------------------------
    this.audi.addEventListener("waiting",function()
    {this.butn.className="wait"; this.wait=1;}); // wait - update button face

    this.audi.addEventListener("canplay",function()
    {this.butn.className="pasv";}); // pasv - update button face

    this.audi.addEventListener("playing",function()
    {this.butn.className="actv"; this.wait=0;}); // actv - update button face

    this.audi.addEventListener("pause",function()
    {this.butn.className="pasv";}); // pasv - update button face
// --------------------------------------------------------------------------------------
}
.bind({})());
