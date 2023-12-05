import Image from 'next/image'
import portrait from '../public/images/portrait.png'
import code from '../public/images/code.svg'
import roundhouse from '../public/images/roundhouse.png'
import SkillsList from './components/SkillsList'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Ebenezer Zergabachew',
  description: 'I write about product development, martial arts, and Jesus Christ.',
}

export default function Home() {

  return (
    <main className="mx-auto">

      <div>

        <section className="lg:grid lg:grid-cols-2">
          <div className="text-xl font-semibold">
            Hello I'm

            <h1 className="text-3xl text-primary mt-8">
                Ebenezer Zergabachew
            </h1>
            
            <p className='text-xl lg:w-3/4 mt-8'>I'm from Addis Ababa, Ethiopia. I'm currently a student at Virginia Tech with a passion for business and technology.</p>
            <br />
          </div>

          <Image className='lg:w-3/4 mt-10' src={portrait} alt='Ebenezer Zergabachew'></Image>
          
        </section>

        <SkillsList></SkillsList>

        <section className="mt-14">
          <h2 className='text-3xl text-primary font-semibold'>I write about product development...</h2>
          <Image className='lg:w-1/2 mt-10' src={code} alt='Code'></Image>
        </section>


        <section className="mt-24">
          <h2 className='text-3xl text-primary float-right font-semibold'>...martial arts</h2>
          <Image className='lg:w-1/2 mt-10 float-right' src={roundhouse} alt='Roundhouse Kick'></Image>
          <div className="clear-right"></div>
        </section>



      </div>

      
    </main>
  )
}
