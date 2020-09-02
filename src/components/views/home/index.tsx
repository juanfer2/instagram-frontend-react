import React from 'react'
import CardAvatarList from '../../cards/cardAvatarList'
import CardPublicationWrapper from '../../cards/cardPublications/cardPublicationWrapper'
function Home() {
  return (
    <div>
      <CardAvatarList />
      <CardPublicationWrapper
        type={'VIDEO'}
        src={'https://www.w3schools.com/html/mov_bbb.mp4'}
        iconAvatar="AVATAR ICON"
        username="USERNAME"
      />
    </div>
  )
}

export default Home
