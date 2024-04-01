const newBox = document.createElement("div");
const container = document.getElementById("container");
const gridBox = container.getElementsByTagName("div");

if (container.childElementCount === 0) {
    for (let x = 0; x < (16 * 16); x++) {
        container.appendChild(newBox.cloneNode(true));
    };
};

console.log(gridBox)

for (let i = 0; i < gridBox.length; i++) {
    gridBox[i].addEventListener("mouseover", fillIn(i));
}

// function fillIn(i) {
//     console.log(gridBox[i]);
//     gridBox[i].style.backgroundColor = "black";
// }