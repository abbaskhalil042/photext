'use client'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {

  const [generatedImage,setGeneratedImage]=useState<string>("")
  // const generatedImage:any = useSearchParams().get('generatedImage')
  // console.log(generatedImage)

  const id=useParams()


  async function getImage()
  {
    const response=await axios.get(`http://localhost:3000/api/image/${id}`)
    const result=await response.data
    console.log(result)
  }



  return (
    <div>
      <Image
        width={1920}
        height={1080}
        className="w-full h-full object-cover rounded-sm"
        src={generatedImage}
        alt="Generated Image"
      />
    </div>
  )
}

export default page