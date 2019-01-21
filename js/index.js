"use strict"
// cloning a copy of the gallery tree nodes to reset later
let orgClone = document.getElementById('gallery').cloneNode(true);

function reSort(img) {
    document.getElementById('sorted__images').appendChild(img); // adding to the lower section to resort the new suspects
}

document.querySelector('.btn-reset').addEventListener('click', () => {
    // resetting the upper section to its initial state 
    document.getElementById('wrap').replaceChild(orgClone, document.getElementById('gallery'));
    orgClone = orgClone.cloneNode(true);

    // removing the lower section sorted children from the DOM
    let srtParent = document.getElementById('sorted__images');
    // while (srtParent.firstChild) {
    //     srtParent.removeChild(srtParent.firstChild);
    // }
    srtParent.innerHTML = "";
})