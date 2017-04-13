'use strict';

module.exports = function(settings, trigger) {
    window.addEventListener('load', function() {

        document.getElementById(settings.elementID).addEventListener("click", function() { setTimeout(trigger,settings.delay)}) ;
    });



};
