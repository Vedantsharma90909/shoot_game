AFRAME.registerComponent("movement",{
    init:function(){
        this.walk()
    },
    walk:function(){
        window.addEventListener("keydown", (e)=> {
            if(e.key==="ArrowUp" || e.key==="ArrowDown" || e.key==="ArrowRight" || e.key==="ArrowLeft"){
                var movement_sound = document.querySelector("#sound-2")
                movement_sound.components.sound.playSound()

            }
        })
    },
})