import './App.css';
//import { AdditionalInformation } from './components/AdditionalInformation/AdditionalInformation';
import { Banner } from './components/Banner/Banner';
import { LookYandex } from './components/LookYandex/LookYandex';
import { Menu } from './components/Menu/Menu';
import { NewsBlock } from './components/NewsBlock/NewsBlock';
import { Search } from './components/Search/Search';
import { AddInfoItem } from './components/AddInfo/AddInfoItem';
import { AddInfo } from './components/AddInfo/AddInfo';
function App() {
  return (
    <div className="App">
      <div className="wrap-top">
        <NewsBlock />
        <LookYandex />
      </div>
      <Menu />
      <Search />
      <Banner />
      <AddInfo/>
      <AddInfoItem/>
    </div>
  );
}

export default App;
