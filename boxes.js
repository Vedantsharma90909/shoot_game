AFRAME.registerComponent("box",{
    schema:{
        height:{type:"number",default:3},
        width:{type:"number",default:3},
        depth:{type:"number",default:3},
    },
    init(){
        for(var i = 0; i<20;i++ ){
            var box_entity = document.createElement("a-entity")
            box_entity.setAttribute("id","box"+i)
            pos_x = Math.random()*200-100
            pos_y=1.5
            pos_z = Math.random()*200-100
            box_entity.setAttribute("position",{x:pos_x,y:pos_y,z:pos_z})
            box_entity.setAttribute("geometry",{primitive:"box",height:this.data.height,width:this.data.width,depth:this.data.depth})
            box_entity.setAttribute("material",{src:"box_image.png"})
            box_entity.setAttribute("static_body",{})
            scene = document.querySelector("a-scene")
            scene.appendChild(box_entity)
            
        }
    }
})