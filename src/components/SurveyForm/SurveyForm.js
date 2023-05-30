import React from "react";
import Fieldset from '../Fieldset/Fieldset';

export default function SurveyForm() {
    const userInfo = ( <div><label htmlFor="name" id="name-label" className="form-label my-1">Name <span className="form-label-sm">*Required</span></label>
    <input type="text" name="name" id="name" className="p-1 form-input" placeholder="Enter your name" required />
    <label htmlFor="email" id="email-label" className="form-label my-1">Email <span className="form-label-sm">*Required</span></label>
    <input type="email" name="email" id="email" className="p-1 form-input" placeholder="Enter your Email" required />
    <label htmlFor="number" id="number-label" className="form-label my-1">Age <span>(optional)</span></label>
    <input type="number" name="number" id="number" className="p-1 form-input" min={12} max={100} placeholder="Age" /></div>)

    const userSurvey = ( <div>
        <label htmlFor="dropdown" className="form-label my-1">Which option best describes your current role?</label>
        <select name="dropdown" id="dropdown" className="p-1 form-input">
          <option value={0}>Select current role</option>
          <option value={1}>Student</option>
          <option value={2}>Full Time Job</option>
          <option value={3}>Full Time Learner</option>
          <option value={4}>Perfer not to say</option>
          <option value={5}>Other</option>
        </select>
        <label htmlFor="recommendation" className="form-label my-1">Would you recommend freeCodeCamp to a friend?</label>
        <label htmlFor="definitely" className="form-label my-1"><input type="radio" name="recommendation" id="definitely" defaultValue="definitely" />
          Definitely</label>
        <label htmlFor="maybe" className="form-label my-1"><input type="radio" name="recommendation" id="maybe" defaultValue="maybe" />
          Maybe</label>
        <label htmlFor="not-sure" className="form-label my-1"><input type="radio" name="recommendation" id="not-sure" defaultValue="not-sure" />
          Not Sure</label>
        <label htmlFor="dropdown-2" className="form-label my-1">What is your favorite feature of freeCodeCamp?</label>
        <select name="dropdown-2" className="p-1 form-input">
          <option value={0}>Select an option</option>
          <option value={1}>Challenges</option>
          <option value={2}>Projects</option>
          <option value={3}>Community</option>
          <option value={4}>Open Source</option>
        </select>
      </div>)

    const additionalComments = (  <div>
        <label htmlFor="improvements" className="form-label my-1">What would you like to see improved?
          <span className="form-label-sm">(Check all that apply)</span></label>
        <label htmlFor="back-end" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="back-end" id="back-end" />
          Front-end Projects</label>
        <label htmlFor="data-visualization" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="data-visualization" id="data-visualization" />
          Data Visualization</label>
        <label htmlFor="challenges" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="challenges" id="challenges" />
          Challenges</label>
        <label htmlFor="open-source" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="open-source" id="open-source" />
          Open Source Community</label>
        <label htmlFor="gitter" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="gitter" id="gitter" />
          Gitter help rooms</label>
        <label htmlFor="videos" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="videos" id="videos" />
          Videos</label>
        <label htmlFor="city-meetups" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="city-meetups" id="city-meetups" />
          City Meetups</label>
        <label htmlFor="wiki" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="wiki" id="wiki" />
          Wiki</label>
        <label htmlFor="forum" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="forum" id="forum" />
          Forum</label>
        <label htmlFor="additional-courses" className="form-label my-1"><input type="checkbox" name="improvements" defaultValue="additional-courses" id="additional-courses" />
          Additional Courses</label>
        <label htmlFor="comments" className="form-label my-1">Any comments or suggestions?</label>
        <textarea name="comments" id="comments" className="p-1 form-input" rows={5} placeholder="Enter your comment here..." defaultValue={""} />
        <input id="submit" type="submit" defaultValue="Submit" className="btn btn-form" />
      </div>)
    return (
        <form action="#" id="survey-form" className="form">
            <Fieldset 
                legend = "User Info"
                fieldsetContent = {userInfo}
            />
            <Fieldset 
                legend = "User Survey"
                fieldsetContent = {userSurvey}
             />
            <Fieldset 
                legend = "Additional Comments"
                fieldsetContent = {additionalComments}
            />
        </form>
    )
}