import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  profile: string;
};

type ProfileInfo = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const ProfileSearch = () => {
  const [profileInfo, setProfileInfo] = useState<ProfileInfo>();

  const [formData, setFormData] = useState<FormData>({
    profile: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.profile}`)
      .then((response) => {
        setProfileInfo(response.data);
        console.log(response.data);
        console.log(profileInfo);
      })
      .catch((error) => {
        setProfileInfo(undefined);
        console.log(error);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name; // nome do imput
    const value = event.target.value; // valor do input
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container info-container">
      <div className="info-search base-info-card">
        <div className="text-primary">
          <h1>Encontre um perfil Github</h1>
        </div>
        <form className="info-search-form" onSubmit={handleSubmit}>
          <div className="info-search-form-input">
            <input
              type="text"
              name="profile"
              value={formData.profile}
              placeholder="Usuário Github"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-light search-button"
          >
            Encontrar
          </button>
        </form>
      </div>
      {profileInfo && (
        <div className="info-data">
          <div className="info-avatar">
            <div className="info-avatar-img">
              <img src={profileInfo.avatar_url} alt={profileInfo.avatar_url} />
            </div>
          </div>
          <div className="info-profile">
            <div className="info-profile-title">Informações</div>
            <ResultCard title="Perfil:" description={profileInfo.url} />
            <ResultCard
              title="Seguidores:"
              description={profileInfo.followers}
            />
            <ResultCard
              title="Localidade:"
              description={profileInfo.location}
            />
            <ResultCard title="Nome:" description={profileInfo.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSearch;
