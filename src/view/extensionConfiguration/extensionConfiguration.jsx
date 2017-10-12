import React, {Component} from 'react';

class ExtensionConfiguration extends Component {

    componentDidMount(){
        window.extensionBridge.register({
            init: function(info) {
                document.getElementById('apiKey').value = (info.extensionSettings && info.extensionSettings.apiKey) || '';
                if(info.settings && info.settings.apiKey){
                    document.getElementById('apiKey').value = info.extensionSettings.apiKey;
                }
            },

            getSettings: function() {
                return {
                    apiKey: document.getElementById('apiKey').value
                };
            },

            validate: function() {
                return true;
            },

        });
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1 className="coral-Heading coral-Heading--1">
                            QuestionPro CX Intercept | Adobe Launch Configuration
                        </h1>
                    </div>
                    <br/>
                    <div>
                        You will need an active QuestionPro CX License to access the API Key. QuestionPro, in
                        partnership
                        with Adobe has a Free Evaluation License for Adobe Launch integration.
                    </div>
                    <br/>
                    <div>
                        Please contact
                        <a className="mailto"
                           target="_blank"
                           href="mailto:adobe-launch@questionpro.com">
                            adobe-launch@questionpro.com
                        </a>
                        to request a Free QuestionPro CX Evaluation License.
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <form>
                        <div>
                            <h1 className="coral-Heading coral-Heading--1">
                                Settings
                            </h1>
                        </div>
                        <div>
                            Please enter your API Key &nbsp;&nbsp;
                            <a target="_blank"
                               href="https://www.questionpro.com/help/generate-api-key.html">
                                <span className="coral-Icon coral-Icon--sizeXS coral-Icon--infoCircle InfoTip-icon"
                                      role="img"/>
                            </a>
                        </div>
                        <div className="form-label">
                            <label>
                                <span>
                                    <input is="coral-textfield"
                                           className="coral-Textfield coral-Form-field" id="apiKey"
                                           placeholder="API Key"/>
                                </span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ExtensionConfiguration;