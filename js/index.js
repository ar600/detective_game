let orgClone = document.getElementById('gallery').cloneNode(true);
// let orgClone = document.body.innerHTML;

// let srtClone = document.getElementById('sorted__images').cloneNode(true);
// let images = document.images;
// console.log(images);


function reSort(img) {
    document.getElementById('sorted__images').appendChild(img); // adding to the lower section to resort the new suspects
}

document.querySelector('.btn-reset').addEventListener('click', () => {

    // resetting the upper section to its initial state 
    document.getElementById('wrap').replaceChild(orgClone, document.getElementById('gallery'));
    orgClone = orgClone.cloneNode(true);

    // removing the lower section sorted children from the DOM
    let srtParent = document.getElementById('sorted__images');
    while (srtParent.firstChild) {
        srtParent.removeChild(srtParent.firstChild);
    }

})