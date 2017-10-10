var sandbox = false;
function showDataElementsList(element){
        var textBoxID = element.id.split('-')[0];
        textBox = document.getElementById(textBoxID+'-DataElement-Value');
        window.extensionBridge.openDataElementSelector(function(data) {
            textBox.value = data;
        })
    }
    
    function addCustomVariable(element){
        var textBoxIDNumber = getCustomVariableCount();
        if(textBoxIDNumber < 255){
            textBoxIDNumber++;
            var nextTextBoxID = "variable"+(textBoxIDNumber);
            $('#customVariables').append('<label id="custom'+textBoxIDNumber+'"><br><span class="label">Variable '+textBoxIDNumber+'</span> <input is="coral-textfield" id="'+nextTextBoxID+'-DataElement-Value" class="coral-Form-field"/> <button id="'+nextTextBoxID+'-Get-DataElement" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="showDataElementsList(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--data" role="img"></span> <span class="coral-Button-label"></span></button><button id="'+nextTextBoxID+'-Add" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="addCustomVariable(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--add" role="img"></span> <span class="coral-Button-label"></span> </button> <button id="'+nextTextBoxID+'-Remove" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="removeCustomVariable(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--minus" role="img"></span> <span class="coral-Button-label"></span> </button></label>')
        }else{
            
        }
    }
    
    function removeCustomVariable(element){
        var textBoxID = element.id.split('-')[0];
        var textBoxIDNumber = Number(textBoxID.substr(textBoxID.length-1));
        var labelID = 'custom'+textBoxIDNumber;
        console.log(labelID);
        $('#'+labelID).remove();
    }
    
    function getVariablesArray(){
        console.log("getVariablesArray");
        var jsonData = {};
        $('#customVariables').children('label').each(function () {
            var key = this.id;            
            var count = Number(key.substr(key.length-1));
            var textBoxID = 'variable'+count+'-DataElement-Value';
            jsonData[key] = $('#'+textBoxID).val();            
        });
        return jsonData;
    }
    
    function getCustomVariableCount(){
        return $('#customVariables > label').length;
    }
    
    function populateMappingData(customVariables){
        $('#customVariables').empty();     
        var customVariablesJson = JSON.parse(customVariables);
            for (var key in customVariablesJson) {
                var textBoxIDNumber = Number(key.substr(key.length-1));                
                var element = '<label id="custom'+textBoxIDNumber+'"><br><span class="label">Variable '+textBoxIDNumber+'</span> <input value="'+customVariablesJson[key]+'" is="coral-textfield" id="variable'+textBoxIDNumber+'-DataElement-Value" class="coral-Form-field"/> <button id="variable'+textBoxIDNumber+'-Get-DataElement" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="showDataElementsList(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--data" role="img"></span> <span class="coral-Button-label"></span></button><button id="variable'+textBoxIDNumber+'-Add" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="addCustomVariable(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--add" role="img"></span> <span class="coral-Button-label"></span> </button> <button id="variable'+textBoxIDNumber+'-Remove" class="coral-Button coral-Button--minimal coral-Button--medium" onclick="removeCustomVariable(this)"> <span class="coral-Icon coral-Icon--sizeS coral-Icon--minus" role="img"></span> <span class="coral-Button-label"></span> </button></label>';
                $('#customVariables').append(element);                
            }
    }
    
    function getSurveys(apiKey,surveyID){
        var http = new XMLHttpRequest();
        var params = ""; 
        var url = "https://labs.questionpro.com/a/api/questionpro.survey.getAllSurveys?accessKey="+apiKey;
        console.log(url);
        http.open("POST", url, true);
        http.onreadystatechange = function() {//Call a function when the state changes.
                console.log('onreadystatechange....');
                if(http.readyState == 4 && http.status == 200) {
                    console.log('success....');
                    jsonParse(http.responseText,surveyID);
                }else{
                    console.log('fail....');
                    console.log(http.status);
                }
            }
            console.log('Sending Params....');
            http.send(params);
    }
    
    function jsonParse(arr,surveyID){
        var obj = JSON.parse(arr);
        var responsesJSON = obj.response;
        if(responsesJSON){
            var surveysJSON = responsesJSON['surveys'];        
            var surveys = document.getElementById("surveyID");
            for(var i=0; i<surveysJSON.length; i++){
                var option = document.createElement("option");
                option.text = surveysJSON[i].surveyName;
                option.value = surveysJSON[i].surveyID;
                option.id = surveysJSON[i].surveyID;
                option.class = "coral-Button";
                surveys.add(option);
            }   
            $("#surveyID option[id='"+surveyID+"']").attr("selected", "selected");
        }else{
            $('#surveyList').empty();
            $('#surveyList').append('<input is="coral-textfield" class="coral-Textfield" id="surveyID" class="coral-Form-field" placeholder="Survey ID">');
            $('#surveyMsg').text("Please enter a survey ID");
        }
        $('#surveyList').show();
        $('#surveyLoader').hide();        
    }