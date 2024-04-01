const newBox = document.createElement("div");
const container = document.getElementById("container");
const gridBox = container.getElementsByTagName("div");

if (container.childElementCount === 0) {
    for (let x = 0; x < (16 * 16); x++) {
        container.appendChild(newBox.cloneNode(true)).setAttribute("id", x);;
    };
};

console.log(gridBox)

for (let i = 0; i < gridBox.length; i++) {
    let fillIn = document.getElementById(i)
    fillIn.addEventListener("mouseover", function () {
        fillIn.style.backgroundColor = "black";
    });
}

