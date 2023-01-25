import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';
import Logo from '../../assets/Frame.svg';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Innovats</strong>
            <span>@innovats</span>
            <Dot />
            <time>5 de dez de 2022</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent>
            <img src={Logo} alt="INNOVATS" />
          </ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              700
            </Status>
            <Status>
              <RetweetIcon />
              37,9 mil
            </Status>
            <Status>
              <LikeIcon />
              145,4 mil
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
