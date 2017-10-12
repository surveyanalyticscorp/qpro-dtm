import React from 'react'
import HeadingConfiguration from '../common/headingConfiguration.jsx';
export default ({ ...props }) => (

    <div className="form-label">
        <HeadingConfiguration title="Survey"/>

        <div id="surveyMsg">
            Select the required survey from the list below
        </div>
        <br/>

        <div id="surveyList" style={{display: 'none'}}>
            <select id="surveyID"
                    className="Select-control coral3-Select-button coral-Button coral-Button--secondary coral-Button--block">
                {/*<option id="-1" value="-1" className="coral-Button">--Select Survey--</option>*/}
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
);
