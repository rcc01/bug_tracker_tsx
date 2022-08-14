import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme } from './styles/theme';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import StoreContextProvider from './contexts/providers/UserStoreContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import Tickets from './components/Tickets/Tickets';
import Employees from './components/Employees/Employees';
import Calendar from './components/Calendar/Calendar';
import Kanban from './components/Kanban/Kanban';
import { RecoilRoot } from 'recoil';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoutes from './ProtectedRoutes';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <HelmetProvider>
        <Helmet>
          <title>Kanban Board</title>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&family=Pacifico&display=swap'
            rel='stylesheet'
          />
          <meta
            property='og:image'
            content='https://tva1.sinaimg.cn/large/e6c9d24egy1h07yud7uwdj21qe0qqwfm.jpg'
          />
          <meta
            property='og:description'
            content='📂  Kanban board with full drag-and-drop support!! Manage your work easily and simply 😎'
          />
        </Helmet>
      </HelmetProvider>
      <StoreContextProvider>
        <Router>
          <RecoilRoot>
            <Routes>
              {/* App or loginForm? in element? use both? */}
              <Route path='/' element={<LoginForm setIsAuth={setIsAuth} />} />
              <Route
                path='login'
                element={<LoginForm setIsAuth={setIsAuth} />}
              />
              <Route path='register' element={<SignupForm />} />
              <Route path='/' element={<ProtectedRoutes isAuth={isAuth} />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='tickets' element={<Tickets />} />
                <Route path='calendar' element={<Calendar />} />
                <Route path='kanban' element={<Kanban />} />
                <Route path='employees' element={<Employees />} />
              </Route>

              {/* <Route path='dashboard' element={<Dashboard />} /> */}
            </Routes>
          </RecoilRoot>
        </Router>
      </StoreContextProvider>
    </ThemeProvider>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;

    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-family: 'Noto Sans KR', sans-serif;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`;
