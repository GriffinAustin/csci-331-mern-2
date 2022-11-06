import MyCounter from './Components/MyCounter';
import MyGithub from './Components/MyGithub';

function App() {
  return (
    <div>
      <MyCounter incBy={1} />
      <MyCounter incBy={2} />
      <hr />
      <MyGithub />
    </div>
  );
}

export default App;
