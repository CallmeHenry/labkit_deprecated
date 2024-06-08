import Spline from '@splinetool/react-spline';
import { BackgroundBeams } from '../../components/ui/background-beams';
export default function LandingPage() {
  return (
    <>
      <div className='flex flex-col h-dvh'>
      
        <div id="hero" className='flex h-dvh bg-gradient-to-tr from-blue-500 to-cyan-300'>


          <Spline scene="https://prod.spline.design/B0KrVlyDlhm-eFJr/scene.splinecode" className='z-10'/>

          <div className="prose-2xl prose-headings:text-blue-50 prose-headings:mb-0 prose-p:text-blue-100 flex flex-col justify-center mr-24 z-10">
            <h1 >Manage your devices</h1>
            <p>A computer hardware toolkit that allows users to scan the serial number of a device and return hardware specifications.
              The specs are stored in a database where users are able to view and manage their devices.</p>
          </div>
        </div>
        <BackgroundBeams/>
      </div>
    </>
  )
}