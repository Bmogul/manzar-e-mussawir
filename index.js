(self["webpackChunkmanzar_e_masawar"] = self["webpackChunkmanzar_e_masawar"] || []).push([["index"],{

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

// import '../css/style.css'
const navbar = document.getElementById('navbar');
let prevScrollpos = window.scrollY;
let scrolledDistance = 0; // To track how much scrolling was done since the navbar disappeared

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    let currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollpos) {
        // Scrolling down
        scrolledDistance = 0;
    } else {
        // Scrolling up
        scrolledDistance += (prevScrollpos - currentScrollPos);
    }

    if(currentScrollPos <= 80){
        navbar.style.animation = 'fadeIn 0.5s';
        navbar.classList.remove('transparent');
    }else{
        if (scrolledDistance > 100) {
            navbar.style.animation = 'fadeIn 0.5s';
            navbar.classList.remove('transparent');
        } else {
            navbar.style.animation = 'fadeOut 0.5s';
            navbar.classList.add('transparent');
        }
    }



    prevScrollpos = currentScrollPos;
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW56YXItZS1tYXNhd2FyLy4vc3JjL2pzL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyJyk7XG5sZXQgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5zY3JvbGxZO1xubGV0IHNjcm9sbGVkRGlzdGFuY2UgPSAwOyAvLyBUbyB0cmFjayBob3cgbXVjaCBzY3JvbGxpbmcgd2FzIGRvbmUgc2luY2UgdGhlIG5hdmJhciBkaXNhcHBlYXJlZFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcbiAgICBsZXQgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgaWYgKGN1cnJlbnRTY3JvbGxQb3MgPiBwcmV2U2Nyb2xscG9zKSB7XG4gICAgICAgIC8vIFNjcm9sbGluZyBkb3duXG4gICAgICAgIHNjcm9sbGVkRGlzdGFuY2UgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNjcm9sbGluZyB1cFxuICAgICAgICBzY3JvbGxlZERpc3RhbmNlICs9IChwcmV2U2Nyb2xscG9zIC0gY3VycmVudFNjcm9sbFBvcyk7XG4gICAgfVxuXG4gICAgaWYoY3VycmVudFNjcm9sbFBvcyA8PSA4MCl7XG4gICAgICAgIG5hdmJhci5zdHlsZS5hbmltYXRpb24gPSAnZmFkZUluIDAuNXMnO1xuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNwYXJlbnQnKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgaWYgKHNjcm9sbGVkRGlzdGFuY2UgPiAxMDApIHtcbiAgICAgICAgICAgIG5hdmJhci5zdHlsZS5hbmltYXRpb24gPSAnZmFkZUluIDAuNXMnO1xuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuYXZiYXIuc3R5bGUuYW5pbWF0aW9uID0gJ2ZhZGVPdXQgMC41cyc7XG4gICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9