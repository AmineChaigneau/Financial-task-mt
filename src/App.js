import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Home from './Home'
import Form from './Form'
import Formulaire from './Formulaire'
import Consigne from './Consigne'
import Calibration from './Calibration'
import CalibrationMT from './CalibrationMT'
import Risk from './Risk'
import Transition from './Transition'
import Stimuli from './Stimuli'
import Choice from './Choice'
import Temp from './Temp'
import Question from './Question'
import Scale from './Scale'
import End from './End'
import FullScreen from "./utils/fullScreen";

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
        <FullScreen>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/form" element={ <Form />} />
            <Route path="/formulaire" element={ <Formulaire />} />
            <Route path="/consigne" element={ <Consigne />} />
            <Route path="/calibration" element={ <Calibration />} />
            <Route path="/calibrationmt" element={ <CalibrationMT />} />
            <Route path="/risk" element={ <Risk />} />
            <Route path="/transition" element={ <Transition />} />
            <Route path="/stimuli" element={ <Stimuli />} />
            <Route path="/choice" element={ <Choice />} />
            <Route path="/temp" element={ <Temp />} />
            <Route path="/question" element={ <Question />} />
            <Route path="/scale" element={ <Scale />} />
            <Route path="/end" element={ <End />} />
          </Routes>
        </FullScreen>
      </ThemeProvider>
    </Router>
  );
}

export default App;
