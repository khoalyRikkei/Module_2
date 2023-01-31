import { useSelector } from "react-redux";
import Control from "../../components/Control";
import FormStudent from "../../components/Form1";
import ListStudent from "../../components/ListStudent";

export default function ListStudents() {
    const toggleForm = useSelector((state) => state.toggleForm);
    return (
        <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
                <div className="card">
                    <Control />
                    <ListStudent />
                </div>
            </div>
            {toggleForm && <FormStudent />}
        </div>
    );
}
