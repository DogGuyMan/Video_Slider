var dotElement = document.querySelectorAll("ul.dotNavigation > div");
var imgElement = document.querySelectorAll(".navigation li");
var ACTIVE_CALSS = "active";
function handlingDot(_idx) {
}
imgElement.forEach(function (element, index) {
    element.addEventListener("mouseenter", function () {
        dotElement[index].classList.toggle(ACTIVE_CALSS);
    });
    element.addEventListener("mouseleave", function () {
        dotElement[index].classList.toggle(ACTIVE_CALSS);
    });
});
