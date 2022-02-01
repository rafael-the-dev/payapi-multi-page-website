import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import { AppContextProvider } from '../../context/AppContext';
import loadable from '@loadable/component';
import ScheduleDemo from '../../components/ScheduleDemo'
//mport { useEffect } from "react";

const App = () => {
    const theme = createTheme();

    const HomePage = loadable(() => import(/* webpackChunkName: "HomePage" */ '../Home'));
    const Header = loadable(() => import(/* webpackChunkName: "Header" */ '../../components/Header'));
    const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ '../../components/Footer'));
    const PricingPage = loadable(() => import(/* webpackChunkName: "PricingPage" */ '../Pricing'));
    const AboutUsPage = loadable(() => import(/* webpackChunkName: "AboutUsPage" */ '../About'));

    return (
        <>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <AppContextProvider>
                        <Router>
                            <Header />
                            <Routes>
                                <Route exact path="/pricing" element={<PricingPage />} />
                                <Route exact path="/about-us" element={<AboutUsPage />} />
                                <Route exact path="/" element={<HomePage />} />
                            </Routes>
                            <ScheduleDemo />
                            <Footer />
                        </Router>
                    </AppContextProvider>
                </ThemeProvider>
            </StylesProvider>
        </>
    )
};

export default App;