import { certificates } from '@/constants/constants'
import Image from 'next/image'

const Certificates = () => {
  return (
    <section className='flex'>
        {
            certificates.map((cert) => (
                <div key={cert.title} className='flex'>
                    <Image src={cert.src} alt={cert.alt} height={200} width={250}/>
                </div>
            ))
        }
    </section>
  )
}

export default Certificates