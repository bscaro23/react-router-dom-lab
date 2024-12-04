import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
    _id: 0,
    boxSize: '',
    boxholder: '',

}

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();
    const handleSubmit = (entry) => {
        entry.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailbox')
    }

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
      };

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="boxSize">Box Size:</label>
            <select
                id="boxSize"
                name="boxSize"
                value={formData.boxSize}
                onChange={handleChange}
            >
                <option value="">Select a size</option> {/* Placeholder */}
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Extra Large">Extra Large</option>
            </select>

            <label htmlFor="boxHolder">Box Holder:</label>
            <input
                type="text"
                id="boxHolder"
                name="boxHolder"
                value={formData.boxHolder}
                onChange={handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default MailboxForm;