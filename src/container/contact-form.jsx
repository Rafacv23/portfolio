import React from "react"
import Input from "../components/input"
import Btn from "../components/btn"
import Title from "../components/title"

const ContactForm = (props) => {
  return (
        <>
            <form id='contact' action='mailto:rafacanosacontacto@gmail.com' method='post' encType='text/plain' onSubmit={props.onSubmit} className='section-home'>
            <Title className="title" text="Contact"></Title>
                <div className='row'>
                    <Input className="input" type="text" placeholder="Name" required></Input>
                    <Input className="input" type="mail" placeholder="Mail" required></Input>
                </div>
                <textarea placeholder='Text me' className='input textarea' cols={54} rows={10}></textarea>
                <div className='row'>
                    <Btn className="cancel-btn hvr-grow-shadow" type="reset" text="Cancel"></Btn>
                    <Btn className="send-btn hvr-grow-shadow" type="submit" text="Send"></Btn>
                </div>
            </form>
    </>)
}

export default ContactForm
