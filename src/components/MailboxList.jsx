import { Link } from "react-router-dom"

const MailboxList = ({ mailboxes }) => {
    return (
        <div >            
            {mailboxes.map((mailbox) => {                
                return (
                <div key={mailbox._id} className="mail-box"><Link to={`/mailboxes/${mailbox._id}`}><h1>Mailbox {mailbox._id}</h1></Link></div>
               
                )
            })}
        </div>
    )
}

export default MailboxList