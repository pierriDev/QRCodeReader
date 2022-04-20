import { Provider } from 'react-redux';
import context from './src/context/AppContext';
import MainNavigation from './src/navigation/TabNavigation';

export default function App() {
  return (
    <Provider store={context}>
      <MainNavigation />
    </Provider>
  );
}
