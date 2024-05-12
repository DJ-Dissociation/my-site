const pageDiv = document.querySelector("sub-page");

const footerDiv = document.createElement("div");
footerDiv.classList.append("footer");
footerDiv.textContent="footer t est";

window.onload = function() {
    pageDiv.appendChild(footerDiv)
    alert("functioning")
}

alert("functiong")
