const MailboxList = ({ mailboxes }) => {
    return (
        <div>
            {mailboxes.map((mailbox) => {
                <h1>{mailbox.boxSize}</h1>
            })}
        </div>
    )
}

export default MailboxList