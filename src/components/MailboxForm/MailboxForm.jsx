import { useState } from "react";
import { useNavigate } from "react-router";


const initialState = {
    boxSize: '',
    boxOwner: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes')
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Box Owner:</label>
                <input
                type="text"
                id="boxOwner"
                name="boxOwner"
                value={formData.weight}
                onChange={handleChange}
                />
                <label htmlFor="boxSize">Box Size:</label>
                <select
                id="boxSize"
                name="boxSize"
                value={formData.boxSize}
                onChange={handleChange}
                required
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
               
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;