import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './formButtons.module.css';
import FormButton from './button/button';

const FormButtonGroup = (props) => {
    return (
        <ul styleName="button-list">
            {props.groupValues.map(value => (
                <li styleName="button-list__item" key={value}>
                    <FormButton
                        value={value}
                        isSelected={props.selectedValue === value}
                        onClick={props.onClick}
                    />
                </li>
            ))}
        </ul>
    );
}

export default CSSModules(FormButtonGroup, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
