(function() {
  console.log('loaded');
  window.SPA = {
    init: (cms) => {
      console.log('init');
      console.log(cms);
      cms.createOverlay();
      // cms.syncOverlay();
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
})();