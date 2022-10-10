 var changeImg = document.querySelector("#Changeimage");
 var img = document.querySelector("#imgsrc")
 var inptrange = document.querySelectorAll(".range")
 var reset = document.querySelector("#reset")
 reset.addEventListener("click", function(){
    none()
    img.style.filter = "none"
 })

    changeImg.addEventListener("click", function(){
        var inptval = document.querySelector("#imageurl")
        img.setAttribute("src", inptval.value)
        inptval.value = ""
    })

    for (i=0; i<inptrange.length-1; i++){
        inptrange[i].addEventListener("input", editimage)
    }

    function none (){
        document.querySelector("#in").value = 0
        document.querySelector("#gs").value = 0
        document.querySelector("#blur").value = 0
        document.querySelector("#hr").value = 0
        document.querySelector("#sp").value = 0
    }
    
    
    function editimage () {
        var In = document.querySelector("#in")
        var gs = document.querySelector("#gs")    
        var blur = document.querySelector("#blur")
        var hr = document.querySelector("#hr")
        var sp = document.querySelector("#sp")


        var gsval = gs.value 
        var blurval = blur.value 
        var hrval = hr.value 
        var spval = sp.value 
        var Inval = In.value
        img.style.filter = "grayscale("+ gsval +"%) sepia("+ spval +"%) blur("+ blurval +"px) hue-rotate("+ hrval +"deg) hue-rotate("+ hrval +"deg) invert("+Inval+"%)"   
    } 