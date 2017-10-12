import React, {Component} from 'react';
import SurveySelector from '../../actions/common/surveySelector.jsx';
import DataMapping from '../../actions/common/dataMapping.jsx';
import SupportContainer from '../../actions/common/supportContainer.jsx';

class Popup extends Component {

    componentDidMount(){
        window.extensionBridge.register({
            init: function(info) {
                var surveyID = '';
                var customVariables = '';
                var apiKey = '';
                if(sandbox){
                    surveyID = 5816401;
                    customVariables = "{\"custom1\":\"dataElement7463\",\"custom2\":\"dataElement74\",\"custom3\":\"dataElement7828\",\"custom4\":\"dataElement9988\",\"custom5\":\"dataElement1515\"}";
                    apiKey = "usjwx";
                }else{
                    if(info.settings && info.settings.surveyID){
                        surveyID = info.settings.surveyID;
                    }
                    if(info.settings && info.settings.customVariables){
                        customVariables = info.settings.customVariables;
                    }
                    if(info.extensionSettings && info.extensionSettings.apiKey){
                        apiKey = info.extensionSettings.apiKey;
                    }
                    console.log("surveyID "+surveyID);
                    console.log("customVariables "+customVariables);
                    console.log("apiKey "+apiKey);
                }
                if(surveyID != ''){
                    $("#surveyID option[id='"+surveyID+"']").attr("selected", "selected");
                }else{
                    surveyID = -1;
                    $("#surveyID option[id='"+surveyID+"']").attr("selected", "selected");
                }
                if(customVariables != ''){
                    populateMappingData(customVariables);
                }
                if(apiKey != ''){
                    getSurveys(apiKey,surveyID);
                }else{
                    $('#surveyList').empty();
                    $('#surveyList').append('<input class="coral-Textfield" id="surveyID" class="coral-Form-field" placeholder="Survey ID">');
                    $('#surveyMsg').text("Please enter a survey ID");
                    $('#surveyList').show();
                    $('#surveyLoader').hide();
                    if(surveyID != ''){
                        $("#surveyID").val(surveyID);
                    }
                }
            },
            getSettings: function() {
                return {
                    surveyID: Number(document.getElementById('surveyID').value),
                    customVariables: JSON.stringify(getVariablesArray())
                };
            },
            validate: function() {
                return true;
            }
        });
    }

    render() {
        return (
            <div>
                <form>
                    <SurveySelector/>
                    <hr/>
                    <br/>
                    <DataMapping/>
                </form>
                <hr/>
                <br/>
               <SupportContainer/>
            </div>
        );
    }
}

export default Popup;