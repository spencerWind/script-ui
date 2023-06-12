import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import NavItem from "./components/Navigation/NavItem";
import NavItems from "./components/Navigation/NavItems";
import ButtonFilled from "./components/Buttons/ButtonFilled";
import NavTitle from "./components/Navigation/NavTitle";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 -z-10 bg-slate-900 h-screen w-screen" />
            <NavBar text={"white"}>
                <NavTitle color="primary">Script-UI</NavTitle>
                <NavItems
                mobile={
                    {
                        backgroundColor: "bg-purple-500",
                        menuColor: "white",
                        textColor: "text-slate-900"
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
                    <ButtonFilled
                        fillColor={"primary"}
                        textColor={"slate-100"}>
                        Get Started
                    </ButtonFilled>
                </NavItems>
            </NavBar>
            <div className="my-8 md:my-12 lg:my-32">
                <Routes>
                    <Route element={<HomePage />} path="/" />
                </Routes>
            </div>
        </div>
        
    );
}

export default App;
