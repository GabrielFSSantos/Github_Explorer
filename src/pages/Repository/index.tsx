import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';


interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="AAAAA" />
          <div>
            <strong>AAAAA</strong>
            <p>BBBBB</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>AAAAA</strong>
            <span>BBBBB</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key={} to={``}>
          <div>
            <strong>{}</strong>
            <p>{}</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>

    </>
  );
}

export default Repository;