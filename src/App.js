
import PersonContextProvider from './components/context/Context';
import './App.css';
import List from './components/List/List';


function App() {



  return (
  <div className='container' >
          <PersonContextProvider>
              <List />       
            
          </PersonContextProvider>
        
    </div>
  );
}

export default App;
