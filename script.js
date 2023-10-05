const showmenu = document.getElementById("menu")
const showul = document.querySelector("nav ul")

showmenu.addEventListener("click" ,() => {
    showul.classList.toggle("showmenu")

})


// scroll amimatiom

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showL');
        }
    });
});

const observerR = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showR');
        }
        
    });
});

const observerUp = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('showUp');
        }
        // else{
        //     entry.target.classList.remove('showUp')
        // }
    });
});


const hiddenL = document.querySelectorAll('.div1');
hiddenL.forEach((el) => observer.observe(el));


const hiddenR = document.querySelectorAll('.div2');
hiddenR.forEach((el) => observerR.observe(el));



const hiddenU = document.querySelectorAll('.div3');
hiddenU.forEach((el) => observerUp.observe(el));





const button = document.querySelector("#theme")
const icon = document.querySelector("i")

function theme(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove("fa-moon")
        icon.classList.remove("fa-solid")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-sun")
        
    }
    else{
        icon.classList.add("fa-moon")
        icon.classList.add("fa-solid")
    }
    
}