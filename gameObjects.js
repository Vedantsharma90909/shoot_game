AFRAME.registerComponent("wire-fence", {
  init:function(){
    x=-20
    z=85
    for(var i = 0 ; i<10; i++){
      var wire_entity= document.createElement("a-entity")
      var wire_entity2= document.createElement("a-entity")
      var wire_entity3= document.createElement("a-entity")
      var wire_entity4= document.createElement("a-entity")


      x = x+5
      y=2.5
      z=z-10


      var scale = {x:2,y:2,z:2}

      wire_entity.setAttribute("id","wire_fence"+i)
      wire_entity2.setAttribute("id","wire_fence2"+i)
      wire_entity3.setAttribute("id","wire_fence3"+i)
      wire_entity4.setAttribute("id","wire_fence4"+i)
      


      wire_entity.setAttribute("position",{x:x,y:y,z:-35})
      wire_entity2.setAttribute("position",{x:x,y:y,z:85})
      wire_entity3.setAttribute("position",{x:-30,y:y,z:z})
      wire_entity4.setAttribute("position",{x:50,y:y,z:z})

      wire_entity.setAttribute("scale",scale)
      wire_entity2.setAttribute("scale",scale)
      wire_entity3.setAttribute("scale",scale)
      wire_entity4.setAttribute("scale",scale)

      wire_entity.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
      wire_entity2.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
      wire_entity3.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")
      wire_entity4.setAttribute("gltf-model","./models/barbed_wire_fence/scene.gltf")

      wire_entity.setAttribute("static-body",{})
      wire_entity2.setAttribute("static-body",{})
      wire_entity3.setAttribute("static-body",{})
      wire_entity4.setAttribute("static-body",{})

      wire_entity3.setAttribute("rotation",{x:0,y:90,z:0})
      wire_entity4.setAttribute("rotation",{x:0,y:90,z:0})

      var scene = document.querySelector("a-scene")
      scene.appendChild(wire_entity)
      scene.appendChild(wire_entity2)
      scene.appendChild(wire_entity3)
      scene.appendChild(wire_entity4)





    }
  }




        
  
      }
  );

