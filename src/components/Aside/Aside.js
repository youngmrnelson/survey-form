import React from "react";

export default function Aside() {
    return (
        <aside className="aside p-3 py-2">
            <p className="aside-text">
            Thank you for visiting my website! If you enjoyed your experience
            here and would like to learn more about me or see more of my work,
            please feel free to check out my
            <a href="https://github.com/youngmrnelson" target="_blank" className="aside-text-link">GitHub</a>
            account and
            <a href="https://www.linkedin.com/in/daniel-nelson-9151a6212/" target="_blank" className="aside-text-link">LinkedIn</a>
            profile. Thank you again for your interest, and I look forward to
            connecting with you!
            </p>
        </aside>
    )
}