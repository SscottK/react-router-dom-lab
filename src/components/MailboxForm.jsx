import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewMailbox = ({ addMailbox}) => {    
    const navigate = useNavigate()
    const [newMailbox, setNewMailbox] = useState({
    
        
        name: "",
        boxSize: ""        
    })

    const handleChange = (event) => {
        setNewMailbox({...newMailbox, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {        
        e.preventDefault()
        newMailbox.boxSize =  newMailbox.boxSize === ""  ? "small" : newMailbox.boxSize         
        addMailbox(newMailbox)        
        setNewMailbox({
            
            name: "",
            boxSize: ""
        })
        navigate('/mailboxes')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Box Holder Name:</label>
                <input id="name" 
                name="name" 
                type="text" 
                value={newMailbox.name}
                onChange={handleChange}/>
                <label htmlFor="boxSize">Mailbox Size</label>
                <select 
                defaultValue="Small"               
                name="boxSize" 
                id="boxSize"
                value={newMailbox.boxSize} 
                onChange={handleChange}>
                    <option value="" disabled selected>Select Your Box Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Add Mailbox</button>
            </form>
        </div>
    )
}

export default NewMailbox