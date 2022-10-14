/*!
=========================================================
* FoodHut Landing page
=========================================================
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

new WOW().init();

function initMap() {
  var Malabe = { lat: 6.903954000000014, lng: 79.955921 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: Malabe,
  });
  var marker = new google.maps.Marker({
    position: Malabe,
    map: map,
  });
}
