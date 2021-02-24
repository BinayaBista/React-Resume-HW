import logo from './logo.svg';
import './Resume.css';

function App() {
  return (
    <div className="Container">
    <div id="head">
     <h1>Binaya Bista</h1>
        <h2>kbistey32@gmail.com. 206-504-6611. Seattle, WA</h2>
    </div>

    <div id="Objective">
      <h2 id="obj">Objective</h2>
      <ui>
        <li>Learn Full Stack</li>
        <li>Be Proficent at it</li>
        <li>Get QA Automation Job</li>
      </ui>
      <div id="Education">
        <h2 id="Edu">Education</h2>
          <ui>
            <li>Seattle Central College, <i>Software Testing</i></li>
            <li>North Seattle College, <i>Bachelor of Business Administration</i></li>
            <li>Shoreline Community College, <i>Associate of Business Administration</i></li>
          </ui>
      </div>

      <div id="Expereince">
        <h2 id="Exp">Expereince</h2>
          <ui>
            <li>Software Test Engineer, <i>Microsoft</i>, <b>Redmond, WA</b></li>
            <li>Business Analyst, <i>Columbia Sports Wear,</i> <b>Portland, Oregon</b></li>
          </ui>
      </div>


    </div>
    </div>
  );
}

export default App;
