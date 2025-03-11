import { useParams } from "react-router";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const singleMailbox = props.mailboxes.find((box) => (
        box._id === Number(mailboxId)
    ));

    if (!singleMailbox) {
        return <h2>Mailbox Not Found!</h2>
    }

    return (
        <>
            <h2>{singleMailbox.boxOwner}</h2>
            <h3>Mailbox Details</h3>
            <dl>
                <dt>Box Size:</dt>
                <dd>{ singleMailbox.boxSize }
                </dd>
            </dl>
        </>
    );
};

export default MailboxDetails;