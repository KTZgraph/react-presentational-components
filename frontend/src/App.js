import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import InteractiveVulnerabilities from "./d3/interactive-vulnerabilities/pages/InteractiveVulnerabilities";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<InteractiveVulnerabilities />} />
            <Route path="1" element={<InteractiveVulnerabilities />} />
            <Route path="d3/1" element={<InteractiveVulnerabilities />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
