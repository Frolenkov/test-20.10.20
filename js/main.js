const grayscale = document.querySelector("#grayscale")
const contrast = document.querySelector("#contrast")
const brightness = document.querySelector("#brightness")
const sepia = document.querySelector("#sepia")
const saturate = document.querySelector("#saturate")
const height = document.querySelector('#height')
const width = document.querySelector('#width')
const img = document.querySelector("#image")
const reset = document.querySelector("#reset")
const imgUrl = document.querySelector("#img-url")

const  defaults = {
    grayscale: 0,
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    height: 1,
    width: 1
}

grayscale.addEventListener("input", updateFilterValue)
contrast.addEventListener("input", updateFilterValue)
brightness.addEventListener("input", updateFilterValue)
sepia.addEventListener("input", updateFilterValue)
saturate.addEventListener("input", updateFilterValue)
height.addEventListener("input", updateFilterValue)
width.addEventListener("input", updateFilterValue)

imgUrl.addEventListener("change", updateImageSrc)

reset.addEventListener("click", resetFilterValue)

function updateFilterValue() {
    reset.disabled = false

    img.style.filter = `
        grayscale(${grayscale.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        saturate(${saturate.value}%)
    `;

    img.style.transform = `
    scaleX(${width.value})
    scaleY(${height.value})
    `;
}

function resetFilterValue() {
    grayscale.value = defaults.grayscale
    contrast.value = defaults.contrast
    brightness.value = defaults.brightness
    sepia.value = defaults.sepia
    saturate.value = defaults.saturate
    height.value = defaults.value
    width.value = defaults.value

    img.style.filter = `
        grayscale(${defaults.grayscale}%)
        contrast(${defaults.contrast}%)
        brightness(${defaults.brightness}%)
        sepia(${defaults.sepia}%)
        saturate(${defaults.saturate}%)
    `;
    img.style.transform = `
    scaleX(${defaults.width})
    scaleY(${defaults.height})
    `;

    reset.disabled = true;
}

function updateImageSrc () {
    img.src = `${imgUrl.value}`
}