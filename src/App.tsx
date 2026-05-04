import { SocialConnect } from "./components/connect-with-us"
import DivContainer from "./components/div/DivContainer"
import { HeroSection } from "./components/hero-section-4"
import SliderReports from "./components/SliderReports"
import Footer from "./components/ui/footer"
import { Navbar1 } from "./components/ui/navbar-1"
import SlideShowServices from "./components/ui/SlideShowServices"
import img from '/public/foto.png'

const App = () => {
    return (
        <>
            <Navbar1 />
            <HeroSection 
                title="Un unico referente per la casa che hai sempre sognato" 
                subtitle="Dalla solidità del cartongesso all'estetica dei pavimenti SPC, fino all'efficienza del cappotto termico. Trasformo i tuoi spazi con interventi completi, finiture di pregio e la cura di chi lavora con passione artigiana." 
                imageUrl={img} 
            />
            <DivContainer id={'progetti'}>
                <SliderReports />
            </DivContainer>
            <DivContainer id={'servizi'}>
                <SlideShowServices />
            </DivContainer>
            <DivContainer id={'contatti'} className="flex-col">
                <SocialConnect />
                <Footer />
            </DivContainer>
        </>
    )
}

export default App