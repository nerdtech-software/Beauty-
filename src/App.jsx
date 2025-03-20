import './App.css';
import BeautyProductSection from './components/BeautyProductSection';
import BeautySection from './components/BeautySection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderBg from './components/HeaderBg';
import MakeUp from './components/MakeUp';
import Newsletter from './components/Newsletter';
const App = () => {
  return (
   <>
   <Header/>
   <HeaderBg/>
   <MakeUp/>
   <BeautyProductSection/>
   <BeautySection/>
   <Newsletter/>
   <Footer/>
   </>
  )
}

export default App
