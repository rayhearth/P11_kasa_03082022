// import logo from '@/logo.svg';np
import '@/App.css';
import { BrowserRouter } from 'react-router-dom';

import PublicRouter from '@/pages/Public/PublicRouter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
