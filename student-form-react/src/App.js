import './App.css';
import Header from './components/Header';
import Form from './components/form/Form';
import Table from './components/Table/Table';
import Gallery from './Gallery';

function App() {
  return (
    // <Gallery/>
    <body>
      <div className='container mt-3'>  
      <Header/>
      <Form/>
      <Table/>
    </div>
    </body>
  );
}

export default App;
