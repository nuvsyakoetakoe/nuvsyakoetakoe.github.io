document.addEventListener("DOMContentLoaded", function () {
    var elem = document.querySelector(".photo-gallery");
    var msnry = new Masonry(elem, {
      itemSelector: ".grid-item",
      columnWidth: ".grid-item",
      gutter: 10,
      fitWidth: true,
    });
  });