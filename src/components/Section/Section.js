import React from "react";

export default function Section(props) {
    return (
        <section className={props.classList}>
            <div className={props.containerClasses}>
                {props.content}
            </div>
        </section>
    )
}