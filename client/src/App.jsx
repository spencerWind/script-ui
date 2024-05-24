import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import NavItem from "./components/Navigation/NavItem";
import NavItems from "./components/Navigation/NavItems";
import ButtonFilled from "./components/Buttons/ButtonFilled";
import NavTitle from "./components/Navigation/NavTitle";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ExamplesPage from "./views/ExamplesPage";
import Container from "./components/Containers/Container";

function App() {
    return (
        <Container>
            <NavBar text={"white"}>
                <NavTitle style={"text-red-500"}>Script-UI</NavTitle>
                <NavItems
                    mobile={{
                        backgroundColor: "bg-purple-500",
                        menuColor: "white",
                        textColor: "text-slate-900",
                    }}>
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
            <div className="">
                <Routes>
                    <Route
                        element={<HomePage />}
                        path="/"
                    />
                    <Route
                        element={<AboutPage />}
                        path="/about"
                    />
                    <Route
                        element={<ExamplesPage />}
                        path="/examples"
                    />
                </Routes>
            </div>
            <div className="fixed left-0 top-0 -z-10 h-screen w-screen bg-slate-900" />
        </Container>
    );
}

export default App;
