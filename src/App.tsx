import React, { FC } from 'react';
import AdoptionLayer from './components/AdoptionLayer/AdoptionLayer';
import { ApolloProvider } from '@apollo/react-hooks';
import { getClient } from './graphql/graphql-client/graphql-client';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f25c5c',
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>

      <ApolloProvider client={getClient()}>

        <div className="App">

          <AdoptionLayer />
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
