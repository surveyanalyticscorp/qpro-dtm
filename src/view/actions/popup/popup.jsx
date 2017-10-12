import React, {Component} from 'react';

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
                    $('#surveyList').append('<input is="coral-textfield" class="coral-Textfield" id="surveyID" class="coral-Form-field" placeholder="Survey ID">');
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
                    <div className="form-label">
                        <div>
                            <h1 className="coral-Heading coral-Heading--1">Survey</h1>
                        </div>
                        <div id="surveyMsg">
                            Select the required survey from the list below
                        </div>
                        <br/>
                        <div id="surveyList" style={{display: 'none'}}>
                            <select id="surveyID"
                                    className="Select-control coral3-Select-button coral-Button coral-Button--secondary coral-Button--block">
                                {/*{<option id="-1" value="-1" className="coral-Button">--Select Survey--</option>}*/}
                            </select>
                        </div>
                        &nbsp;&nbsp;
                        <div style={{width: '12.5rem', textAlign: 'center'}}
                             id="surveyLoader"
                             className="coral-Tooltip-drop-target coral-Tooltip-drop-element-attached-top coral-Tooltip-drop-element-attached-center coral-Tooltip-drop-target-attached-bottom coral-Tooltip-drop-target-attached-center">
                            <div>
                                <div className="coral-Wait waitXS"></div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <br/>
                    <div>
                        <h1 className="coral-Heading coral-Heading--1">
                            Data Mapping
                        </h1>
                    </div>
                    <div>Use Data Elements to capture external data in your survey variables</div>

                    <div className="form-label" id="customVariables">
                        <label id="custom1">
                            <br/>
                            <span className="label">Variable 1</span>
                            <input is="coral-textfield" id="variable1-DataElement-Value" className="coral-Form-field"/>
                            <button id="variable1-Get-DataElement"
                                    className="coral-Button coral-Button--minimal coral-Button--medium"
                                    onclick="showDataElementsList(this)">
                                <span className="coral-Icon coral-Icon--sizeS coral-Icon--data" role="img"></span>
                                <span className="coral-Button-label"></span>
                            </button>
                            <button id="variable1-Add"
                                    className="coral-Button coral-Button--minimal coral-Button--medium"
                                    onclick="addCustomVariable(this)">
                                <span className="coral-Icon coral-Icon--sizeS coral-Icon--add" role="img"></span>
                                <span className="coral-Button-label"></span>
                            </button>
                            <button id="variable1-Remove"
                                    className="coral-Button coral-Button--minimal coral-Button--medium"
                                    onclick="removeCustomVariable(this)">
                                <span className="coral-Icon coral-Icon--sizeS coral-Icon--minus" role="img"></span>
                                <span className="coral-Button-label"></span>
                            </button>
                        </label>
                    </div>
                </form>
                <hr/>
                <br/>
                <div>
                    <h1 className="coral-Heading coral-Heading--1">Support</h1>
                </div>
                <div>
                    Please contact
                    <a className="mailto"
                       target='_blank' href="mailto:adobe-launch@questionpro.com">
                        adobe-launch@questionpro.com
                    </a>
                    if you have questions or issues with the QuestionPro rules & triggers.
                </div>
            </div>
        );
    }
}

export default Popup;