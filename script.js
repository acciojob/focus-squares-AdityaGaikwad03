//your JS code here. If required.
const squares = document.querySelectorAll(".square");

// colors
const lavender = "#E6E6FA";
const coffee = "#6F4E37";

squares.forEach((square, index) => {
  square.addEventListener("mouseenter", () => {
    squares.forEach((sq, i) => {
      if (i !== index) {
        sq.style.backgroundColor = coffee;
      } else {
        sq.style.backgroundColor = lavender;
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    // reset all to lavender
    squares.forEach((sq) => {
      sq.style.backgroundColor = lavender;
    });
  });
});
