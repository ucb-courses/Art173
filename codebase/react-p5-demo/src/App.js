
import './App.css';
// import P5Sketch from './components/p5-sketch';
// import Function from './components/functions';
import Bezier from './components/p5_bezier';

function App() {
  return (
    <div className='container'>
      <div className='sketch'>
        {/* <P5Sketch /> */}
        {/* <Function /> */}
        <Bezier />
      </div>
    </div>
  );
}

export default App;
        