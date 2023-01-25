import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Jarbas Tavares</h1>
        <h2>@t_jarbas</h2>

        <p>
          <a href="https://github.com/JarbasTS">Github </a> /
          <a href="https://www.linkedin.com/in/jarbasts/"> Linkedin</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Salvador, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 4 de outubro de 1993
          </li>
        </ul>

        <Followage>
          <span>
            <strong>1.902 </strong> Seguindo
          </span>
          <span>
            <strong>107 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
