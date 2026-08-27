
import { Container } from '../container/Container';
import NewCarousel from './NewCarousel';
import UpcomingCarousel from './UpcomingCarousel';


const Hero = () => {
  return (
    <div className='w-full'>
      <Container className='mt-10'>
        <div className="relative  text-9xl text-green-600 font-bold">
          {/* <Image src={'/logo/f-removebg-preview.png'} alt="hero" fill className="object-cover" /> */}
          الألعاب
        </div>
        <h1 className='text-gray-800 text-3  xl mt-3'> تقييمات النقاد العرب للألعاب في مكان واحد</h1>

        <div className="w-full">
          <NewCarousel />
                    <UpcomingCarousel />

        </div>
      </Container>

    </div>
  )
}

export default Hero
