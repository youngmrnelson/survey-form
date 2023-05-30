import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Section from './components/Section/Section';
import SurveyForm from './components/SurveyForm/SurveyForm';
import ProjectsAside from './components/Aside/ProjectsAside';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Section 
                classList="survey my-4"
                containerClasses="container-secondary m-auto p-2"
                content={<SurveyForm />}
            />
            <Section 
                classList="section project m-4"
                containerClasses="container-tertiary m-auto p-2"
                content={<ProjectsAside />}
            />
            <Footer />
        </>
    )
}