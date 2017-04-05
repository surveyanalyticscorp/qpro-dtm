'use strict';

module.exports = function(settings) {
    var ifrm = document.createElement("iframe");
    var cssEl = document.createElement("link");
    cssEl.setAttribute("type","text/css");
    cssEl.setAttribute("href","http://labs.questionpro.com/stylesheets/popup-survey.css");
    cssEl.setAttribute("rel","stylesheet");

    var surveyDiv = document.createElement("div");
    surveyDiv.setAttribute("id","qp-survey");
    surveyDiv.setAttribute("class","qpro-survey");

    var surveyURL = 'http://labs.questionpro.com/a/TakeSurvey?id=' + settings.surveyID + '&isMobile=true';
    ifrm.setAttribute("src", surveyURL);
    ifrm.style.width = "100%";
    ifrm.style.height = "480px";
    ifrm.setAttribute("frameborder",0);
    surveyDiv.appendChild(ifrm);

    document.body.appendChild(cssEl);
    document.body.appendChild(surveyDiv);


};
