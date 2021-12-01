AFRAME.registerComponent("play-on-click", {
schema:{
    "isPlayed":{
        type:"boolean",
        default:false
    }
},
init:function(){
    this.video = this.el.getAttribute("material").src;
    this.onClick = this.onClick.bind(this);
},
play:function(){
    window.addEventListener("click",this.onClick);
},
onClick:function(e){
    if(!this.video){
        return;
    }
    var playing = this.el.getAttribute("play-on-click").isPlaying;
    this.el.object3D.visible = true;
    if(!playing){
        this.el.setAttribute("play-on-click",{
            "playing":true
        });
        this.video.play();
    }
    else{
        this.el.setAttribute("play-on-click",{
            "playing":false
        });
        this.video.pause();
    }
}
});
