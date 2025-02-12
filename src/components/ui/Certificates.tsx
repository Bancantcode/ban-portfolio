import { certificates } from '@/constants/constants'
import Image from 'next/image'

const Certificates = () => {
  return (
    <section>
        {
            certificates.map((cert) => (
                <div key={cert.title} className='flex'>
                    <Image src={cert.src} alt={cert.alt} />
                </div>
            ))
        }
    </section>
  )
}

export default Certificates