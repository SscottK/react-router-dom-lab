import { useParams } from "react-router-dom"



const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
    const selectedLetters = props.letters.filter(
        (letter) => letter.mailboxId == Number(mailboxId)
    );
    return (
        <>
        {selectedBox ?  <div>
            <h1>Box Holder: {selectedBox.name}</h1>
            <h2>Box Number: {selectedBox._id}</h2>
            <h2>Box Size: {selectedBox.boxSize}</h2>
            <h2>Letters</h2>
            <ul>
                {selectedLetters.map((letter, index) => {
                    return (
                       <>
                        <li key={index}>{letter.message}</li>
                        </>
                    )
                })}
            </ul>
        </div> :
        <div><h1>Mailbox Not Found</h1></div>
        }
       </>
       
    )
}

export default MailboxDetails