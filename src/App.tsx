import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/searchPage";
import Admin from "./pages/Admin";
import FindRoom from "./pages/findRoom";
import Drawtesting from "./pages/testingPages/Drawtesting";
import Xarrowtesting from "./pages/testingPages/Xarrowtesting";
import Xarrowtesting2 from "./pages/testingPages/xArrowtesting2";
import CreatePage from "./pages/CrudPages/CreatePage";
import ReadPage from "./pages/CrudPages/ReadPage";
import UpdatePage from "./pages/CrudPages/UpdatePage";
import DeletePage from "./pages/CrudPages/DeletePage";
import GridGame from "./pages/testingPages/GridGame";
import LeafletFitBounds from "./pages/testingPages/LeafletFitBounds";
import LeafLetSuperMap from "./pages/testingPages/LeafletSuperMap";
import FindPerson from "./pages/FindPerson";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="admin" element={<Admin />} />
      <Route path="search" element={<Search />} />
      <Route path="drawtesting" element={<Drawtesting />} />
      <Route path="findRoom" element={<FindRoom />} />
      <Route path="xarrowtesting" element={<Xarrowtesting />} />
      <Route path="xarrowtesting2" element={<Xarrowtesting2 />} />
      <Route path="createPage" element={<CreatePage />} />
      <Route path="readPage" element={<ReadPage />} />
      <Route path="updatePage" element={<UpdatePage />} />
      <Route path="deletePage" element={<DeletePage />} />
      <Route path="gridGame" element={<GridGame />} />
      <Route path="leafletfitbounds" element={<LeafletFitBounds />} />
      <Route path="leafletsupermap" element={<LeafLetSuperMap />} />
      <Route path="find" element={<FindPerson />} />
    </Routes>
  );
}

export default App;
