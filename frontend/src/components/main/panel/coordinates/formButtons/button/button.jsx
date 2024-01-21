import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './button.module.css';

const FormButton = (props) => {
    return (
        <button
            styleName={props.isSelected ? "form-button form-button_active" : "form-button"}
            type="button"
            onClick={() => props.onClick(props.value)}
        >
            {props.value}
        </button>
    );
}

export default CSSModules(FormButton, styles, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });
