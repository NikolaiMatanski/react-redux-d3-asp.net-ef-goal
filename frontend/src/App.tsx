import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { store } from './store';
import Layout from './views/Layout';

const App = ({ children }: PropsWithChildren) => (
  <div className="App">
    <Provider store={store}>
      <Layout>{children}</Layout>
    </Provider>
  </div>
);

export default App;
