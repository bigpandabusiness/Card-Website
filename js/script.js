// Created by: Alex Nelson
// Created on: Jan 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Card-Website/sw.js", {
    scope: "/Card-Website/",
  })
}
var picture1 = 0
function change() {
  if (picture1 == 0) {
     document.getElementById("image").innerHTML = '<img src="second.jpg" alt="image" length=" 168" width="300" onmouseleave="change()">'
     picture1++
  }
  else{
    document.getElementById("image").innerHTML = '<img src="download.jpg" alt="image" length=" 168" width="300" onmouseenter="change()">'
    picture1 = picture1 - 1
  }
}


