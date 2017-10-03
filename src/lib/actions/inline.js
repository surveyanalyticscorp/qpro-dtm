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

    var  variables = [];
    variables = populateVariables(settings);


    surveyURL += appendVariableParams(variables);

    ifrm.setAttribute("src", surveyURL);
    ifrm.style.width = "100%";
    ifrm.style.height = "480px";
    ifrm.setAttribute("frameborder",0);
    surveyDiv.appendChild(ifrm);

    document.body.appendChild(cssEl);
    document.body.appendChild(surveyDiv);

};

function populateVariables(settings) {
    console.log("populateVariables");
    console.log("JSON STRING "+settings.customVariables)
    console.log("JSON.parse(settings.customVariables);    "+JSON.parse(settings.customVariables));
    var variables = JSON.parse(settings.customVariables);    
    return variables;
}

function appendVariableParams(variables) {
    var queryParams = "";  
    for (var key in variables) {
      if (variables.hasOwnProperty(key)) {
          queryParams += "&"+key+"=" + variables[key];
          console.log(queryParams)
      }
    }
    return queryParams;
}
