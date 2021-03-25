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

const imageDiv = () => {
  const imageDiv = document.createElement("div");

  imageDiv.appendChild(image1);
  imageDiv.appendChild(image2);
  imageDiv.appendChild(image3);
  imageDiv.appendChild(image4);
  imageDiv.appendChild(image5);
  imageDiv.appendChild(image6);
  imageDiv.appendChild(image7);

  return imageDiv;
};

export { imageDiv };
