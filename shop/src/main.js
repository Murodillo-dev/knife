import React from 'react'

function main() {
    let my_vieo = document.getElementById("video");
    if (my_vieo.paused) {
        my_vieo.play();
    }
    else{
        my_vieo.paused();
    }
}
 export default main;