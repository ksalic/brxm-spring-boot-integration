(function () {
  window.SPA = {
    init: (cms) => {
      cms.createOverlay();
      // cms.syncOverlay();
      // Remember the cms object for subsequent callbacks
    },
    renderComponent: (id, propertiesMap) => {
      // Implement logic for re-rendering the component with the provided ID,
      // given a map of component properties
      if (!isEmpty(propertiesMap)) {
        window.location.href = removeUrlParameter(window.location.href) + "?partial=true&ref=" + id + "&" + serialize(propertiesMap);
      } else {
        window.location.href = removeUrlParameter(window.location.href);
      }
    }
  };

  function removeUrlParameter (url) {
    var urlParts = url.split('?');
    var newUrl = url;
    if (urlParts.length >= 2) {
      // Get first part, and remove from array
      newUrl = urlParts.shift();
      // Join it back up
    }
    return newUrl;
  }

  function serialize (obj) {
    var str = [];
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  }

  function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
        return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

})();