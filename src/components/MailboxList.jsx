import {Link} from 'react-router-dom'

const MailboxList = (props) => {

    if (props.mailbox.length === 0) return <h1>Mailbox Empty</h1>

    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailbox.map((currentMailbox) => (
                    <li key={currentMailbox._id} className='mail-box'>
                        <Link to={`/mailbox/${currentMailbox._id}`}>
                        Mailbox {currentMailbox._id}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;
