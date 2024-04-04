//header
// slider images array
const sliderImgs = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"];
let sliderImage = document.querySelector('.background-image');
let sliderGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');
            setTimeout(() => {
                if(index == sliderGrids.length - 1){
                    if(currentImage >= sliderImgs.length - 1){
                        currentImage = 0;
                    } else{
                        currentImage++;
                    }

                    sliderImage.src = `img/${sliderImgs[currentImage]}`;
                    sliderGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })

                }

            }, 100);

        }, index * 100);
    })
}
// changing section

let scrollcontainer=document.querySelector(".gallery");
let backbtn=document.getElementById("backbtn");
let nextbtn=document.getElementById("nextbtn");
scrollcontainer.addEventListener("wheel",(evt)=>{
  evt.preventDefault();
  scrollcontainer.scrollLeft+=evt.deltaY;
});

nextbtn.addEventListener("click",()=>{
  scrollcontainer.style.scrollBehaviour="smooth";
  scrollcontainer.scrollLeft+=900;
})
backbtn.addEventListener("click",()=>{
  scrollcontainer.style.scrollBehaviour="smooth";
  scrollcontainer.scrollLeft-=900;
})


// section portion
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg')
    }
})
