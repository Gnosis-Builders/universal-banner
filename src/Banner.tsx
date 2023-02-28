import React, { ReactNode } from 'react'
import './Banner.css'

interface Props {
  header?: string
  children?: ReactNode
  displayBanner?: boolean
  titleStyles?: object
  backgroundStyles?: object
}

const Banner: React.FC<Props> = ({ header, backgroundStyles, titleStyles, displayBanner, ...props }) => {
  if (!displayBanner) {
    return null
  }
  return (
    <div className='banner__root'>
      <header className='banner__header' style={backgroundStyles}>
        <div className='banner__toolbar' id='back-to-top-anchor'>
          <div className='banner__title' style={titleStyles}>
            {header ? header : props.children}
          </div>
        </div>
      </header>
    </div>
  )
}

Banner.defaultProps = {
  displayBanner: true,
  children: (
    <p>
      <a href='https://d14n.info' target='_blank' rel='noreferrer noopener'>
        d14n.info
      </a>{' '}
      is now live! Discover decentralization metrics for Gnosis Chain and Ethereum networks.
    </p>
  ),
}

export default Banner
