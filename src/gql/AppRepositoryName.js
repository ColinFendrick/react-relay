import graphql from 'babel-plugin-relay/macro';

const AppRepositoryName = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

export default AppRepositoryName;
