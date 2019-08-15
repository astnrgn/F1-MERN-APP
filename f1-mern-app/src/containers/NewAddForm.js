import { connect } from "react-redux";
import AddForm from "../components/Add/Add";

const wrapperFunction = connect();
const NewAddForm = wrapperFunction(AddForm);

export default NewAddForm;
