import React from 'react';
import HeadingConfiguration from './headingConfiguration.jsx';
import ContainerText from './containerText.jsx';
import TextField from './textField.jsx';

export default ({ ...props }) => (
    <div>
        <div>
            <div>
                <HeadingConfiguration title="QuestionPro CX Intercept | Adobe Launch Configuration"/>
            </div>
            <br/>
            <ContainerText
                text="You will need an active QuestionPro CX License to access the API Key. QuestionPro, in partnership with Adobe has a Free Evaluation License for Adobe Launch integration."/>
            <br/>
            <ContainerText
                text="Please contact <a className='mailto' target='_blank' href='mailto:adobe-launch@questionpro.com'>adobe-launch@questionpro.com</a> to request a Free QuestionPro CX Evaluation License."/>
        </div>
        <br/>
        <hr/>
        <br/>
        <div>
            <form>
                <div>
                    <HeadingConfiguration title="Settings"/>
                </div>
                <div>Sayali :: lease enter your API Key &nbsp;&nbsp;<a target="_blank"
                                                             href="https://www.questionpro.com/help/generate-api-key.html"><span
                    className="coral-Icon coral-Icon--sizeXS coral-Icon--infoCircle InfoTip-icon" role="img"></span></a>
                </div>
                <div className="form-label">
                    <label>
                <span>
                    <TextField is="coral-textfield" id="apiKey" placeholder="API Key"/>
                    </span>
                    </label>
                </div>
            </form>
        </div>
    </div>
);
