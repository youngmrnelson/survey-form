import React from 'react';
import Aside from '../Aside/Aside';

export default function Header() {
    return (
        <header className="header my-4">
            <div className="container-tertiary m-auto p-2">
                <Aside />
                <h1 id="title" className="h-main my-3 ta-c">freeCodeCamp Survey</h1>
                <p><i className="fa-regular fa-clipboard h-icon ta-c mb-3" /></p>
                <p id="description" className="p-main">
                Welcome to my survey form, the first project in
                <a href="https://www.freecodecamp.org/learn/2022/responsive-web-design/" target="_blank" className="p-main-link">freeCodeCamp's</a>
                Responsive Web Design curriculum. This survey contains various types
                of form elements, such as text inputs, radio buttons, checkboxes,
                and dropdown menus, as well as a submit button.
                </p>
                <br />
                <p className="p-main">
                The purpose of this project is to practice my HTML and CSS skills by
                creating a simple, user-friendly form that collects data from users.
                </p>
            </div>
        </header>
    )
}