import PropTypes from "prop-types"
import { useDispatch } from "react-redux";
import { removeItem } from "../../reduxStore/actions";
import css from "./ContactListElement.module.css";

export const ContactListElement = ({contact}) => {
    const dispatch = useDispatch();

    const { id, name, number } = contact;

    return (
        <>
            <li className={css.contactListItem}>{name}: {number}
                <button className={css.deleteBtn} type="button" onClick={() => dispatch(removeItem(id))}>Delete</button>
            </li>
        </>
    )
}

ContactListElement.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
}