import './App.css';
import { CakesView } from './featutes/cakes/cakesView';
import { IcecreamView } from './featutes/icecream/icecreamView';
import { UserView } from './featutes/async/userView';
function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <IcecreamView/>
      <CakesView />
      <UserView/>
    </div>
  );
}

export default App;
