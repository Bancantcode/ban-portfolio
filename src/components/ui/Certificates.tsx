import { certificates } from '@/constants/constants'
import Image from 'next/image'

const Certificates = () => {
  return (
    <div className='flex'>
        {
            certificates.map((cert) => (
                  <Image key={cert.title} src={cert.src} alt={cert.alt} height={200} width={250}/>
            ))
        }
    </div>
  )
}

export default Certificates