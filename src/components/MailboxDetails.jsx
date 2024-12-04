import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const {mailboxId} = useParams();
    const singleMailbox = props.mailbox.find((box) => box._id === Number(mailboxId));
    let yourLetters = props.letter.filter((l) => Number(l.mailbox) === singleMailbox._id);
    console.log(`singleMailbox: ${singleMailbox._id}, yourLetters: ${yourLetters}`);

    if (!singleMailbox) return <h1>No Mailbox Found!</h1>

    return (
        <>
            <h1>Mailbox {singleMailbox._id}</h1>
            <h2>Details</h2>
            <dl>
                <dt>Mailbox Owner: {singleMailbox.boxHolder}</dt>
                <br />
                <dt>Mailbox Size: {singleMailbox.boxSize}</dt>  
          </dl>

          {yourLetters.map((letter, idx) => {
            console.log(letter)

            return(
                <div key={idx} className='letter'>
                    <p>Dear {letter.recipient},</p>
                    <br />
                    <p>{letter.message}</p>
                </div>
            )
          })}
        </>
    );
};

export default MailboxDetails;