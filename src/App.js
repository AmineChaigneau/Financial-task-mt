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
import Distress from './Distress'
import Temporal from './Temporal'
import End from './End'
import Test from './Test'
import Langue from './Langue'
import FullScreen from "./utils/fullScreen";
import Layout from "./Component/layout/layout";

const theme = {
  colors: {
    background: {
      main: '#FFFFFF'
    },
    primary: {
      main: '#2EA44F',
      light: '#a3d4b1',
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
          <Route path="/" element={<Langue />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/form" element={<Form />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/formulaire" element={<Formulaire />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/consigne" element={<Consigne />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/calibration" element={<Calibration />} />
          </Route>
          <Route path="/calibrationmt" element={<CalibrationMT />} />
          <Route element={<Layout />}>
            <Route path="/risk" element={<Risk />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/test" element={<Test />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/transition" element={<Transition />} />
          </Route>
          <Route path="/stimuli" element={<Stimuli />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/temp" element={<Temp />} />
          <Route element={<Layout />}>
            <Route path="/question" element={<Question />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/scale" element={<Scale />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/distress" element={<Distress />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/temporal" element={<Temporal />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/end" element={<End />} />
          </Route>
        </Routes>
        </FullScreen>
      </ThemeProvider>
    </Router>
  );
}

export default App;
