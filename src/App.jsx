import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Hero />
      <main className="flex-grow-1">
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App
