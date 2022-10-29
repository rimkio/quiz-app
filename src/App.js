import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Fragment } from 'react';
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom'
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';

function App() {
   return (
      <Router>
         <Container maxWidth="sm">
            <Box textAlign="center" mt={5}>
               <Routes>
                  <Route path="/"
                     element={
                        <Fragment>
                           <Typography variant='h2' fontWeight="bold">QUIZ APP</Typography>
                           <Settings />
                        </Fragment>
                     } exact />
                  <Route path="/questions" element={<Questions />} />
                  <Route path="score" element={<FinalScreen />} />
               </Routes>
            </Box>

         </Container>
      </Router>
   );
}

export default App;
