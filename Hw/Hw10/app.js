const $urlInput = document.getElementById("url");
const $widthInput = document.getElementById("width");
const $heightInput = document.getElementById("height");
const $boderInput = document.getElementById("boder-radius");
const $altInput = document.getElementById("alt");
const $image = document.getElementById("images");

$urlInput.onchange = () => {
    $image.setAttribute("src", $urlInput.value);
}

$altInput.onchange = () => {
    $image.setAttribute("alt", $altInput.value);
}

$boderInput.onchange = () => {
    $image.style.borderRadius = $boderInput.value + "px";
}

$widthInput.onchange = () => {
    $image.style.width = $widthInput.value + "px";
}

$heightInput.onchange = () => {
    $image.style.width = $heightInput.value + "px";
}

$altInput.onchange = () => {
    $image.setAttribute('alt', $altInput.value);
}
