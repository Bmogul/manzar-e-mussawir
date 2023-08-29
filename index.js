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

    // Check if the screen width is less than or equal to 768px (typical mobile width)
    if (window.innerWidth <= 768) {
        // Do not fade out the navbar on mobile
        navbar.style.animation = 'fadeIn 0.5s';
        navbar.classList.remove('transparent');
    } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnphci1lLW1hc2F3YXIvLi9zcmMvanMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcydcbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcbmxldCBwcmV2U2Nyb2xscG9zID0gd2luZG93LnNjcm9sbFk7XG5sZXQgc2Nyb2xsZWREaXN0YW5jZSA9IDA7IC8vIFRvIHRyYWNrIGhvdyBtdWNoIHNjcm9sbGluZyB3YXMgZG9uZSBzaW5jZSB0aGUgbmF2YmFyIGRpc2FwcGVhcmVkXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpO1xuICAgIGxldCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgc2NyZWVuIHdpZHRoIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byA3NjhweCAodHlwaWNhbCBtb2JpbGUgd2lkdGgpXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xuICAgICAgICAvLyBEbyBub3QgZmFkZSBvdXQgdGhlIG5hdmJhciBvbiBtb2JpbGVcbiAgICAgICAgbmF2YmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlSW4gMC41cyc7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc3BhcmVudCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zID4gcHJldlNjcm9sbHBvcykge1xuICAgICAgICAgICAgLy8gU2Nyb2xsaW5nIGRvd25cbiAgICAgICAgICAgIHNjcm9sbGVkRGlzdGFuY2UgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2Nyb2xsaW5nIHVwXG4gICAgICAgICAgICBzY3JvbGxlZERpc3RhbmNlICs9IChwcmV2U2Nyb2xscG9zIC0gY3VycmVudFNjcm9sbFBvcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjdXJyZW50U2Nyb2xsUG9zIDw9IDgwKXtcbiAgICAgICAgICAgIG5hdmJhci5zdHlsZS5hbmltYXRpb24gPSAnZmFkZUluIDAuNXMnO1xuICAgICAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zcGFyZW50Jyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYgKHNjcm9sbGVkRGlzdGFuY2UgPiAxMDApIHtcbiAgICAgICAgICAgICAgICBuYXZiYXIuc3R5bGUuYW5pbWF0aW9uID0gJ2ZhZGVJbiAwLjVzJztcbiAgICAgICAgICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNwYXJlbnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmF2YmFyLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlT3V0IDAuNXMnO1xuICAgICAgICAgICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCd0cmFuc3BhcmVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==