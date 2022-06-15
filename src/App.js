import './styles/App.css';
import Title from './sections/Title'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
	return (
    <Router>
      <Title />
    </Router>
  )
}

export default App;