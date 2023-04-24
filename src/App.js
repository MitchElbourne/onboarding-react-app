import logo from './logo.svg';
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ProductList } from './components/ProductList/ProductList';

import SiteHeading from './components/SiteHeading/SiteHeading';

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SiteHeading />

          <ProductList />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
