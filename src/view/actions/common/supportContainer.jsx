import React from 'react';
import HeadingConfiguration from '../common/headingConfiguration.jsx';
export default ({ ...props }) => (
    <div>
        <HeadingConfiguration title="Support"/>

        <div>
            Please contact
            <a className='mailto' target='_blank' href='mailto:adobe-launch@questionpro.com'>
                adobe-launch@questionpro.com
            </a> if you have questions or issues with the QuestionPro rules and triggers.
        </div>
    </div>
);
