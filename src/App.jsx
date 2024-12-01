import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {
  const list = [{ name: "Элемент 1" }, { name: "Элемент 2" }];
  return (
    <div className="App">
      <div className="container">
        <Form startValue="Что будем искать ?" />
        <List data={list} />
      </div>
    </div>
  );
}

export default App;
