
let navbar = document.getElementById("nav");
console.log(nav);

let navigation = document.getElementById("navigation");

// let toggoler=navigation.style.display='none'
nav.addEventListener('click',()=>{
 navigation.style.display='none'
}
    // if(toggoler){
    //     navigation.style.display = "block";
    // }
   
)


navbar.addEventListener("click", function () {
  navigation.innerHTML = "Hello World";
});