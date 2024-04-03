const container = document.querySelector(".ratings");

const total = document.querySelector("#count>span");

const star = document.querySelectorAll(".star");

let filled = 0;

container.addEventListener("click", (e) => {
  const curClick = e.target.dataset.id;
  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled");
  }
  for (let i = 0; i < curClick; i++) {
    star[i].classList.add("star-filled");
  }

  total.textContent = curClick;
  filled = curClick;
});

container.addEventListener("mouseover", function (e) {
  let curClick = e.target.dataset.id;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < curClick; i++) {
    star[i].classList.add("star-filled");
  }
});

container.addEventListener("mouseleave", function () {
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < filled; i++) {
    star[i].classList.add("star-filled");
  }
});
