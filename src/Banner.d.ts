import React, { ReactNode } from 'react'

interface Props {
  header?: string
  children?: ReactNode
  titleStyles?: object
  backgroundStyles?: object
}

declare const Banner: React.FC<Props>

export default Banner
