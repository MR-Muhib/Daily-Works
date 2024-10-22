document.getElementById("addText").addEventListener("click", () => {
  const textElement = document.createElement("div");
  textElement.contentEditable = true;
  textElement.className = "text-element";
  textElement.innerText = "Double click to edit";
  textElement.style.left = "50px";
  textElement.style.top = "50px";
  makeDraggable(textElement);
  document.getElementById("canvas").appendChild(textElement);
});

document.getElementById("addImage").addEventListener("click", () => {
  const imageElement = document.createElement("img");
  imageElement.src = "https://via.placeholder.com/100"; // Placeholder image
  imageElement.className = "image-element";
  imageElement.style.left = "auto";
  imageElement.style.top = "auto";
  makeDraggable(imageElement);
  document.getElementById("canvas").appendChild(imageElement);
});

function makeDraggable(element) {
  element.onmousedown = function (e) {
    let shiftX = e.clientX - element.getBoundingClientRect().left;
    let shiftY = e.clientY - element.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
      element.style.left = pageX - shiftX + "px";
      element.style.top = pageY - shiftY + "px";
    }

    function onMouseMove(e) {
      moveAt(e.pageX, e.pageY);
    }

    document.addEventListener("mousemove", onMouseMove);

    element.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      element.onmouseup = null;
    };
  };

  element.ondragstart = function () {
    return false;
  };
}
