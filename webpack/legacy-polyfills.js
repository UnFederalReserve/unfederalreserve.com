// For IE11 to create custom event by new Event()
(function() {
  if (typeof window.CustomEvent === 'function') return; // If polyfill not required

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('Event');
    evt.initEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.Event = CustomEvent;
})();
