import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import NavItem from "./components/Navigation/NavItem";
import NavItems from "./components/Navigation/NavItems";
import Button from "./components/Buttons/Button";

function App() {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col">
            <div className="border py-8">
                <NavBar text={"white"}>
                    <h1 className="text-primary text-xl font-extrabold">
                        Script-UI
                    </h1>
                    <NavItems>
                        <NavItem value={"About"} destination = "/about" />
                        <NavItem value={"Examples"} destination="/examples" />
                        <NavItem value={"Docs"} destination="/documentation" />
                        <Button
                            value={"Get Started"}
                            text={"black"}
                            style="filled"
                            color="secondary"
                        />
                    </NavItems>
                </NavBar>
            </div>
        </div>
    );
}

export default App;
