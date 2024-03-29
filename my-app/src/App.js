import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <Sidebar />
      <NavBarForm />
      <Content />
    </div>
  );
}

export default App;