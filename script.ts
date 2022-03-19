const dotElement = document.querySelectorAll<HTMLElement>("ul.dotNavigation > div");
const imgElement = document.querySelectorAll<Element>(".navigation li");

const ACTIVE_CALSS = "active";

function handlingDot(_idx :any){
    
}

imgElement.forEach((element : any, index : any) => {
    element.addEventListener("mouseenter", ()=>{
        dotElement[index].classList.toggle(ACTIVE_CALSS);
    });
    element.addEventListener("mouseleave", ()=>{
        dotElement[index].classList.toggle(ACTIVE_CALSS);
    });
});