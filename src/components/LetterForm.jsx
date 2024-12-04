import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    _id: 0,
    mailbox: null,
    recipient: '',
    message: '',

}

const LetterForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const handleSubmit = (entry) => {
        entry.preventDefault();
        props.addLetter(formData);
        setFormData(initialState);
        navigate(`/mailbox/${formData.mailbox}`);
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
      };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="mailbox">Select a mailbox</label>
            <select
                id="mailbox"
                name="mailbox"
                value={formData.mailbox}
                onChange={handleChange}
            >
                <option value="">Select a mailbox</option>
                {props.mailbox.map((box, idx) => {
                    return <option key={idx} value={box._id}>Mailbox {box._id}</option>
                })}
            </select>

            <label htmlFor="recipient">Recipient:</label>
            <input
                type="text"
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    )

}

export default LetterForm;

//todo at some validation checks as well as styling of the Mailbox details page for the letters