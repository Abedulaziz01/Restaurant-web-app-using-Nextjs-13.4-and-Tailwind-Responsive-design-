import Image from 'next/image'
import Slider from './component/Slider'
import Featured from './component/Featured'
import Offer from './component/Offer'

export default function Home() {
  return (
<main>
  <Slider/>
  <Featured/>
   <Offer/>
</main>
  )
}
