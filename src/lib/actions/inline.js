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
    var variables = [];
    if (settings.custom1El != '') {
	variables[0] = document.getElementById(settings.custom1El).innerHTML;
    }

    if (settings.custom2El != '') {
	variables[1] = document.getElementById(settings.custom2El).innerHTML;
    }
    
    if (settings.custom3El != '') {
	variables[2] = document.getElementById(settings.custom3El).innerHTML;
    }


    if (settings.custom4El != '') {
	variables[3] = document.getElementById(settings.custom4El).innerHTML;
    }


    if (settings.custom5El != '') {
	variables[4] = document.getElementById(settings.custom5El).innerHTML;
    }
    
    return variables;
}

function appendVariableParams(variables) {
    var queryParams = "";
    variables.forEach(function (el, index) {
        queryParams += "&custom" + (index+1) + "=" + el;
    });

    return queryParams;
}
