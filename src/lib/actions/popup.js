'use strict';

module.exports = function(settings) {

    var surveyURL = 'http://labs.questionpro.com/a/TakeSurvey?id=' + settings.surveyID + '&isMobile=true';

    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (900 / 2)) + dualScreenLeft;
    var top = ((height / 2) - (500 / 2)) + dualScreenTop;

    var newWindow = window.open(surveyURL, '_blank', 'scrollbars=yes, width=' + 900 + ', height=' + 500 + ', top=' + top + ', left=' + left);


};
