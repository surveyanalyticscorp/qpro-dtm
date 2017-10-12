import React from 'react'
import HeadingConfiguration from '../common/headingConfiguration.jsx';
export default ({ ...props }) => (
    <div>
        <HeadingConfiguration title="Data Mapping"/>

        <div>Use Data Elements to capture external data in your survey variables</div>

        <div className="form-label" id="customVariables">
            <label id="custom1">
                <br/>
                <span className="label">Variable 1</span>
                <input id="variable1-DataElement-Value" className="coral-Form-field"/>
                <button id="variable1-Get-DataElement"
                        className="coral-Button coral-Button--minimal coral-Button--medium">
                    {/*onClick="showDataElementsList(this)"*/}
                    <span className="coral-Icon coral-Icon--sizeS coral-Icon--data" role="img"></span>
                    <span className="coral-Button-label"></span>
                </button>
                <button id="variable1-Add"
                        className="coral-Button coral-Button--minimal coral-Button--medium">
                    {/*onClick="addCustomVariable(this)"*/}
                    <span className="coral-Icon coral-Icon--sizeS coral-Icon--add" role="img"></span>
                    <span className="coral-Button-label"></span>
                </button>
                <button id="variable1-Remove"
                        className="coral-Button coral-Button--minimal coral-Button--medium">
                    {/* onClick="removeCustomVariable(this)"*/}
                    <span className="coral-Icon coral-Icon--sizeS coral-Icon--minus" role="img"></span>
                    <span className="coral-Button-label"></span>
                </button>
            </label>
        </div>
    </div>
);
