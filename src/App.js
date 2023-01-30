import "./App.css";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import FormStudent from "./components/Form1";
import { useSelector } from "react-redux";

function App() {
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

export default App;
