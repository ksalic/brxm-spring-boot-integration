(function () {
  // your page initialization code here
  // the DOM will be available here


  var cmsObject;

  var callback = function(){
    // Handler when the DOM is fully loaded
    window.SPA = {
      init: (cms) => {
        console.log('init');
        console.log(cms);
        cms.createOverlay();
        // Remember the cms object for subsequent callbacks
      },
      renderComponent: (id, propertiesMap) => {
        // Implement logic for re-rendering the component with the provided ID,
        // given a map of component properties
        console.log('renderComponent');
        console.log(id);
        console.log(propertiesMap);
        window.location.reload();
      }

    };
  };

  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }

  var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function( obj, callback ){
      if( !obj || !obj.nodeType === 1 ) return; // validation

      if( MutationObserver ){
        // define a new observer
        var obs = new MutationObserver(function(mutations, observer){
          if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
            callback( mutations[0] );
        });
        // have the observer observe foo for changes in children
        obs.observe( obj, { childList:true, subtree:true });
      }

      else if( window.addEventListener ){
        obj.addEventListener('DOMNodeInserted', callback, false);
        obj.addEventListener('DOMNodeRemoved', callback, false);
      }
    }
  })();

  observeDOM( document.querySelector('div'), function(m){
    console.log('Added:', m.addedNodes, 'Removed:', m.removedNodes);
  });



})();