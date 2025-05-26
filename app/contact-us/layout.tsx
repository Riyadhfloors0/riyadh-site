
import { generateMetadata } from '@/lib/generate-metadata'
import React from 'react'
export const metadata = generateMetadata({title: 'Contact Us '})
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
