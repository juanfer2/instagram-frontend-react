import React from 'react'
import { IMAGE } from '../../../contants/card.constant'

import CardAvatarList from '../../cards/cardAvatarList'
import CardPublicationWrapper from '../../cards/cardPublications/cardPublicationWrapper'
function Home() {
  return (
    <div>
      <CardAvatarList />
      <CardPublicationWrapper
        type={IMAGE}
        src={
          'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/12/06113250/Eruca-por-Agust%C3%ADn-Dusserre-DSC_2338.jpg'
        }
        iconAvatar="AVATAR ICON"
        username="USERNAME"
      />
    </div>
  )
}

export default Home
