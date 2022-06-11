import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="main">
          <div className="container">
            <div className="main__wrapper">
              <Navbar />
              <div className="main-content">
                <Routes>

                  <Route
                    path="/profile" 
                    element={
                      <Profile />
                    } />

                  <Route
                    path="/dialogs" 
                    element={
                      <DialogsContainer />
                    } />

                </Routes>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
