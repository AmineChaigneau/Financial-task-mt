import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Home from './Home'
import Form from './Form'
import Consigne from './Consigne'
import Calibration from './Calibration'
import CalibrationMT from './CalibrationMT'
import Transition from './Transition'
import Stimuli from './Stimuli'
import Choice from './Choice'
import Temp from './Temp'
import End from './End'

const theme = {
  colors: {
    background: {
      main: '#FFFFFF'
    },
    primary: {
      main: '#2EA44F',
      text: 'black'
    }
  }
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/form" element={ <Form />} />
            <Route path="/consigne" element={ <Consigne />} />
            <Route path="/calibration" element={ <Calibration />} />
            <Route path="/calibrationmt" element={ <CalibrationMT />} />
            <Route path="/transition" element={ <Transition />} />
            <Route path="/stimuli" element={ <Stimuli />} />
            <Route path="/choice" element={ <Choice />} />
            <Route path="/temp" element={ <Temp />} />
            <Route path="/end" element={ <End />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
