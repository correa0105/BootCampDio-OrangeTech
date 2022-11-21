import React from 'react';
import { Container, NameText, Progress, UserPicuture } from './styles';

const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
        <UserPicuture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}

export { UserInfo }