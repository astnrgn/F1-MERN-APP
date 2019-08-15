import { connect } from "react-redux";
import Add from "../components/Add/Add";

const wrapperFunction = connect();
const NewAddForm = wrapperFunction(Add);

export default NewAddForm;
