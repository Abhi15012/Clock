import Head from './components/title';
 import Detail from './components/detail';
import './index.css'
import'bootstrap/dist/css/bootstrap.min.css';
import Time from './components/time'
function App(){

  return <center className='one '> <div className="clock-container">
{/* <h1> hello</h1> */}
<Head></Head>
    <Detail></Detail>
    <Time></Time>

  </div>
  </center>
}
export default App;
