import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import NavItem from "./components/Navigation/NavItem";
import NavItems from "./components/Navigation/NavItems";
import Button from "./components/Buttons/Button";
import NavTitle from "./components/Navigation/NavTitle";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar text={"white"}>
                <NavTitle color="primary">Script-UI</NavTitle>
                <NavItems>
                    <NavItem destination={"/about"} value={"About"} />
                    <NavItem destination={"/examples"} value={"Examples"} />
                    <NavItem destination={"/docs"} value={"Docs"} />
                    <Button color="primary" style="filled" value="Get STarted" />
                </NavItems>
            </NavBar>
        </div>
    );
}

export default App;
