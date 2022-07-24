import HomePage from './components/HomePage/HomePage';
import StoreContextProvider from './contexts/providers/UserStoreContextProvider';

const App = () => {
  <StoreContextProvider>
    <HomePage />
  </StoreContextProvider>
}

export default App;
