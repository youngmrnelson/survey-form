import React from "react";

export default function Fieldset(props) {
    return (
        <fieldset className="form-fieldset mb-4">
            <legend className="form-fieldset-legend pb-1">{props.legend}</legend>
            {props.fieldsetContent}
        </fieldset>
    )
}