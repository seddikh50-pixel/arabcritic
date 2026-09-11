import React from 'react'
import { getPlatforms } from '../services/service.platform'
import Platforms from '@/app/components/admin/Plarforms'




const page = async () => {
  const platforms = await getPlatforms()
  
  return (
    <div>
      <Platforms platforms={platforms.platforms} />
    </div>
  )
}

export default page
