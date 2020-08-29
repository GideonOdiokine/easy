import React from 'react';
import Card from './Card'


function About(props){
    return(
        <section className="about-landing">
            <div className="container">
                <div className=" about-top">
                    <h2 style={customStyle}>{`${props.head}`}</h2>
                    <p style={pStyle}>{`${props.ptext}`}</p>
                </div>
       
                <div className="about-bottom">
                    <article className="card">
                          <Card src="icon-budgeting.svg" heading="Online Banking" ptext="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."/>
                          <Card src="icon-onboarding.svg" heading="Simple Budgeting" ptext="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."/>
                          <Card src="icon-budgeting.svg" heading="Fast Onboarding" ptext="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."/>
                          <Card src="icon-onboarding.svg" heading="Open API" ptext="Manage your savings, investments, pension, and much more from one account."/>
                    </article>
                </div>
           </div>
        </section>
    )
}

const customStyle={
    color:'#000',
    lineHeight:'2rem',
    fontSize:'30px',
    fontFamily:'monospace',
    fontWeight:'200'
}
const pStyle={
    color:'#000',
    lineHeight:'1.5rem',
    fontSize:'14px',
    fontStyle:'italic',
    padding:'3px'
}

export default About;