import Image from 'next/image'
import portrait from '../public/images/portrait.png'
import code from '../public/images/code.svg'
import roundhouse from '../public/images/roundhouse.png'

export default function Home() {

  return (
    <main className="mx-auto">

      <div>

        <section className="lg:grid lg:grid-cols-2">
          <div className="text-xl font-semibold">
          Hello I'm 
            <h1>
              <div className="text-3xl text-primary">
                <br />
                Ebenezer Zergabachew</div>
            </h1>
            <br />
            <p className='text-xl'>I'm a student at Virginia Tech with an interest in business and technology.</p>
            <br />
          </div>

          <Image className='lg:w-3/4 ' src={portrait} alt='Ebenezer Zergabachew'></Image>
          
        </section>

        <section className="mt-24">
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
