import logo from './logo.svg';
import './App.css';
import Router from './routes';
import {useState} from 'react'
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import BlogsApiClient from './service/blogs-api-client'

function App() {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState();
  const [errors, setErrors] = useState();

  return (

    <div className="App">
    <ThemeConfig>
    <ScrollToTop />
    <GlobalStyles />
    <BaseOptionChartStyle />
    <Router posts={posts} />
    </ThemeConfig>
    </div>
  );
}

export default App;
