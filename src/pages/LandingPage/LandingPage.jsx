import Spline from '@splinetool/react-spline';
import { BackgroundBeams } from '../../components/ui/background-beams';
import { FlipWords } from '../../components/ui/flip-words';
import Navigation from '../../components/NavBar/NavBar.jsx';

export default function LandingPage() {

  const words = ["desktops", "laptops", "tablets", "smartphones"];

  return (
    <>
      <Navigation />
      <div className='flex flex-col h-dvh bg-gradient-to-tr from-blue-500 to-cyan-300'>

        <div id="hero" className='flex h-dvh w-10/12 m-auto'>

          <Spline scene="https://prod.spline.design/B0KrVlyDlhm-eFJr/scene.splinecode" className='z-10 w-1/4' />

          <div className="prose-2xl prose-headings:text-blue-50 prose-headings:mb-0 prose-p:text-blue-100 flex flex-col justify-center z-10 w-full">
            <h1 className='w-fit text-9xl'>Manage <br></br></h1>
            <h1 className='w-fit text-9xl'><FlipWords words={words} /> </h1>
          </div>


        </div>

        <BackgroundBeams />

      </div>
    </>
  )
}