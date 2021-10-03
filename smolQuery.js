"use strict";

// smolQuery v1 (c) Conor https://is.gd/sQuery 11/11/2020
// Licenced Under MIT

function s(q) {
  let elementsFunction = function(fn = el => el) {
    let elements = document.querySelectorAll(q);
    
    for (let r = 0; r < e.length; r++) {
        fn(elements[r]);
    }

    return elementsFunction;
  }

  return elementsFunction;
}

s.request = function(method = "POST", url, data = "", completed = r => r, config = {}){
  if (isDictionary(data) || method === "GET") {
    data = Object.keys(data).map(key => `${key}=${data[key]}`).join('&');
  }
  let finalURL = url;
  if (data) {
    if (method === "GET") {
      finalURL = url + "?" + data;
    } else {
      config.body = data;
    }
  } else {
    finalURL = url;
  }
  fetch(finalURL, {method: "GET", ...config}).then(r => {completed(r)}).catch(r => completed(r));
}

let isDictionary = (t) => {return (!(t instanceof FormData || t instanceof Blob || t instanceof URLSearchParams) && t instanceof Object)}
