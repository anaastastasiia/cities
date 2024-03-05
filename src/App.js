import List from './components/List/List';

function App() {
  const cities = ['Kharkiv', 'Mykolaiv', 'Lviv', 'Poltava'];

  return (
    <>
      <List list={cities} backgroundColor={'lightblue'}/>
    </>
  );
}

export default App;
