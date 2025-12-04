import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "../pages/Homepage";
import QrScan from "../pages/QrScan";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="qr-scan" element={<QrScan />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
