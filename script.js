


var tl =  gsap.timeline()
tl.from(".line h1 , .line h2",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5


})
tl.from('#line1-part1, .line h2',{
    opacity:0,
onStart:function(){
    var h5timer = document.querySelector('#line1-part1 h5')
var count = 0
var int =  setInterval(function(){
    if(h5timer.innerHTML === '100'){
        clearInterval(int)
    }else{
    count++,
    h5timer.innerHTML = count
    }
   
},35)
}
})
tl.to('.line h2',{
    animationName:"anime",
    opacity:1

})
tl.to('#loader',{
    opacity:0,
    duration:0.2,
    delay:4
})
tl.from('#page1',{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
    
})
tl.to("#loader",{
    display:"none"
})