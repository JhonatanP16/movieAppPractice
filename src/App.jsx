import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeaderContent from "./components/HeaderContent";
import HomeView from "./views/HomeView";

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <main>
      <HeaderContent/>
      <Routes>
      <Route path="/" element={<HomeView/>}/>
      </Routes>
     </main>
    </BrowserRouter>
  )
}

export default App
