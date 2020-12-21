export function getQueryParam(param) {
    var rx = new RegExp("[?&]" + param + "=([^&]+).*$");
    console.log(rx);
    var returnVal = window.location.search.match(rx);

    return returnVal === null ? "" : returnVal[1];
  }