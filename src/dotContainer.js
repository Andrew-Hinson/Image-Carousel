const spans = () => {
  const dotContainer = document.createElement("div");
  dotContainer.classList.add("dots-container");
  const span1 = document.createElement("span");
  span1.classList.add("dot");
  const span2 = document.createElement("span");
  span2.classList.add("dot");
  const span3 = document.createElement("span");
  span3.classList.add("dot");
  const span4 = document.createElement("span");
  span4.classList.add("dot");
  const span5 = document.createElement("span");
  span5.classList.add("dot");
  const span6 = document.createElement("span");
  span6.classList.add("dot");
  const span7 = document.createElement("span");
  span7.classList.add("dot");

  dotContainer.appendChild(span1);
  dotContainer.appendChild(span2);
  dotContainer.appendChild(span3);
  dotContainer.appendChild(span4);
  dotContainer.appendChild(span5);
  dotContainer.appendChild(span6);
  dotContainer.appendChild(span7);
  return dotContainer;
};
export { spans };
