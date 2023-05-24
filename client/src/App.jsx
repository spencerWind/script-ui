import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import NavItem from "./components/Navigation/NavItem";
import NavItems from "./components/Navigation/NavItems";
import Button from "./components/Buttons/Button";
import NavTitle from "./components/Navigation/NavTitle";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 -z-10 bg-slate-900 h-screen w-screen" />
            <NavBar text={"white"}>
                <NavTitle color="primary">Script-UI</NavTitle>
                <NavItems
                mobile={
                    {
                        backgroundColor: "red",
                        menuColor: ""
                    }
                }
                >
                    <NavItem
                        destination={"/about"}
                        value={"About"}
                    />
                    <NavItem
                        destination={"/examples"}
                        value={"Examples"}
                    />
                    <NavItem
                        destination={"/docs"}
                        value={"Docs"}
                    />
                    <Button
                        style={"filled"}
                        color={"secondary"}
                        text={"slate-950"}
                        onClick={() => {
                            console.log("button has been clicked");
                        }}>
                        Get Started
                    </Button>
                </NavItems>
            </NavBar>
        </div>
    );
}

export default App;
