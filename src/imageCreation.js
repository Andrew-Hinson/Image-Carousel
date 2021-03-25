import cat1 from "./media/cat1.jpg";
import cat2 from "./media/cat2.jpg";
import cat3 from "./media/cat3.jpg";
import cat4 from "./media/cat4.jpg";
import cat5 from "./media/cat5.jpg";
import cat6 from "./media/cat6.jpg";
import cat7 from "./media/cat7.jpg";

const image1 = document.createElement("img");
const image2 = document.createElement("img");
const image3 = document.createElement("img");
const image4 = document.createElement("img");
const image5 = document.createElement("img");
const image6 = document.createElement("img");
const image7 = document.createElement("img");

image1.src = cat1;
image2.src = cat2;
image3.src = cat3;
image4.src = cat4;
image5.src = cat5;
image6.src = cat6;
image7.src = cat7;

image1.classList.add("slidePic");
image2.classList.add("slidePic");
image3.classList.add("slidePic");
image4.classList.add("slidePic");
image5.classList.add("slidePic");
image6.classList.add("slidePic");
image7.classList.add("slidePic");

const slideContainer = () => {
  const slideContainer = document.createElement("div");
  slideContainer.classList.add("slide-Container");

  const prev = document.createElement("a");
  prev.classList.add("prev");
  prev.href = "#";
  prev.title = "Previous";
  prev.innerText = "PREVIOUS";

  const next = document.createElement("a");
  next.classList.add("next");
  next.href = "#";
  next.title = "Next";
  next.innerText = "NEXT";

  const imageDiv1 = document.createElement("div");
  imageDiv1.classList.add("slide");
  imageDiv1.classList.add("fade");
  imageDiv1.appendChild(image1);

  const imageDiv2 = document.createElement("div");
  imageDiv2.classList.add("slide");
  imageDiv2.classList.add("fade");
  imageDiv2.appendChild(image2);

  const imageDiv3 = document.createElement("div");
  imageDiv3.classList.add("slide");
  imageDiv3.classList.add("fade");
  imageDiv3.appendChild(image3);

  const imageDiv4 = document.createElement("div");
  imageDiv4.classList.add("slide");
  imageDiv4.classList.add("fade");
  imageDiv4.appendChild(image4);

  const imageDiv5 = document.createElement("div");
  imageDiv5.classList.add("slide");
  imageDiv5.classList.add("fade");
  imageDiv5.appendChild(image5);

  const imageDiv6 = document.createElement("div");
  imageDiv6.classList.add("slide");
  imageDiv6.classList.add("fade");
  imageDiv6.appendChild(image6);

  const imageDiv7 = document.createElement("div");
  imageDiv7.classList.add("slide");
  imageDiv7.classList.add("fade");
  imageDiv7.appendChild(image7);

  slideContainer.appendChild(imageDiv1);
  slideContainer.appendChild(imageDiv2);
  slideContainer.appendChild(imageDiv3);
  slideContainer.appendChild(imageDiv4);
  slideContainer.appendChild(imageDiv5);
  slideContainer.appendChild(imageDiv6);
  slideContainer.appendChild(imageDiv7);

  slideContainer.appendChild(prev);
  slideContainer.appendChild(next);

  return slideContainer;
};

export { slideContainer };
