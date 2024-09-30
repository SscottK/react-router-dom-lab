import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LetterForm = ({ mailboxes, setLetters, letters }) => {
    const navigate = useNavigate()
    const [letter, setletter] = useState({
        mailboxId: 0,
        recipient: "",
        message: "",
    })

    const handleChange = (event) => {
        console.log(event.target)
        setletter({...letter, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (letter.mailboxId === 0) {
            return
        }
        setLetters([...letters, letter])
        navigate(`/mailboxes/${letter.mailboxId}`)
    }

    return (
        <div>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <select 
                onChange={handleChange} 
                name="mailboxId" 
                id="mailboxId" 
                value={letter.mailboxId}>
                    {[<option value="" selected>Select Box Number</option>].concat(mailboxes.map((mailbox) => {
                        return <option key={mailbox._id} value={mailbox._id}>Mailbox {mailbox._id}</option>
                    }))}
                </select>
                <label htmlFor="recipient">Recipient</label>
                <input onChange={handleChange} name="recipient" type="text" placeholder="Recipient Name"/>
                <label htmlFor="message">Message</label>
                <textarea onChange={handleChange} name="message" id="message" placeholder="Message"></textarea>
                <button type="submit">Send Letter</button>
            </form>
        </div>
    )
}

export default LetterForm