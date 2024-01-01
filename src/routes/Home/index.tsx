import PrimaryButton from "components/PrimaryButton";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
    return (
        <section className="search-profile-start">
            <div>
                <h2>Desafio Github API</h2>
                <p>DevSuperior - Escola de programação</p>
            </div>
            <div className="margin-button">
                <Link to={"/search-profile"}>
                    <PrimaryButton buttonTitle="Começar" />
                </Link>
            </div>
        </section>
    );
}

export default Home;
