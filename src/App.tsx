import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bread } from "./components/Bread";
import { Error } from "./components/Error";
import { Home } from "./components/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route
                        path="/croissant"
                        element={<Bread name="croissant" />}
                    />
                    <Route
                        path="/sandwitch"
                        element={<Bread name="sandwitch" />}
                    />
                    <Route path="/cake" element={<Bread name="cake" />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
