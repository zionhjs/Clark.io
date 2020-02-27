if (Meteor.isClient) {

  import React from 'react';
  import { Router, Route } from 'react-router';
  import createBrowserHistory from 'history/createBrowserHistory';

  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import getMuiTheme from 'material-ui/styles/getMuiTheme';
  import * as Colors from 'material-ui/styles/colors';
  import colors from '../../ui/Colors';
  import { fade } from 'material-ui/utils/colorManipulator';

  import Header from '../../ui/header/';
  import Footer from '../../ui/footer/';
  import Home from '../../ui/home/';
  import FAQs from '../../ui/legals/FAQs';
  import Terms from '../../ui/legals/Terms'
  import Retailers from '../../ui/retailers/';

  import Signup from '../../ui/Signup.jsx'
  import OwnerSignup from '../../ui/OwnerSignup.jsx';
  import BrandSignup from '../../ui/BrandSignup.jsx';
  import Login from '../../ui/Login.jsx';
  //import Terms from '../../ui/Terms.jsx'
  import NewsletterSignup from '../../ui/NewsletterSignup.jsx';

  const browserHistory = createBrowserHistory();

  // let pathFor = (path, params) => {
  //   // FlowRouter.watchPathChange();
  //   let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  //   return FlowRouter.path( path, params, query );
  // };

  // let urlFor = (path, params) => {
  //   return Meteor.absoluteUrl( pathFor(path, params) );
  // };

  // let currentRoute = (route) => {
  //   FlowRouter.watchPathChange();
  //   return FlowRouter.current().route.name === route ? 'active' : '';
  // };

  const ftTheme = getMuiTheme({
    zIndex: {
      // menu: 1000,
      // appBar: 1100,
      // leftNavOverlay: 1200,
      // leftNav: 1300,
      popover: 1000
    },
    fontFamily: 'Source Sans Pro, sans-serif',
    palette: {
      primary1Color: Colors.teal300,
      primary2Color: Colors.pink700,
      primary3Color: Colors.pink400,
      accent1Color: colors.blue,
      accent2Color: colors.blue,
      accent3Color: Colors.tealA400,
      textColor: Colors.darkBlack,
      alternateTextColor: Colors.white,
      canvasColor: Colors.white,
      borderColor: Colors.grey300,
      disabledColor: fade(Colors.darkBlack, 0.3),
      pickerHeaderColor: colors.blue,
      clockCircleColor: fade(Colors.darkBlack, 0.07),
      shadowColor: Colors.fullBlack,
    },
    button: {
      fontWeight: 'bold',
      fontSize: 12,
      padding: 10,
      height: 42,
    },
    flatButton: {
      padding: 10,
      margin: 5,
    },
    raisedButton: {
      iconSize: 10,
      fontSize: 14,
      textColor: colors.whiteWash,
      color: colors.blue,
      padding: 10,
      margin: 15,
    },
    textField: {
      borderBottomStyle: 'dashed'
    },
    menuItem: {
      lineHeight: 40
    }
  });

  export const renderRoutes = () => (
    <MuiThemeProvider muiTheme={ftTheme}>
      {/*Might need to add onUpdate={this.handleScroll} to Router*/}
      <Router history={browserHistory}>
        <div id="global-container" className="container-fluid noPadding">
          <Header colors={colors} history={browserHistory} />

          <Route component={ScrollToTop} />
          <Route exact path="/" render={() => <Home colors={colors} />} />
          <Route path="/retailers" render={() => <Retailers colors={colors} />} />
          <Route path="/faqs" render={() => <FAQs colors={colors} />} />
          <Route path="/signup" render={() => <Signup colors={colors} />} />
          <Route path="/owner-signup" render={() => <OwnerSignup colors={colors} />} />
          <Route path="/brand-signup" render={() => <BrandSignup colors={colors} />} />
          <Route path="/login" render={() => <Login colors={colors} />} />
          <Route path="/terms" render={() => <Terms colors={colors} />} />
          <Route path="/" render={({ location }) => {
            if (typeof window.ga === 'function') {
              window.ga('set', 'page', location.pathname + location.search);
              window.ga('send', 'pageview');
            }
            return null;
          }} />

          {/*<Route path="*" component={App} />*/}

          <Footer colors={colors} />
        </div>
      </Router>
    </MuiThemeProvider>
  );

  // history.listen(function (location) {
  //   window.ga('send', 'pageview', location.pathname);
  // });

  // const handleScroll = () => {
  //   let {
  //     action
  //   } = this.state.location;
  //   let target = document.getElementById("how-it-works");

  //   if (action === 'push') {
  //     window.scrollTo(200, 200);
  //     // $('body, html').scrollTo('#how-it-works');
  //     // animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop - 100, 500, true);
  //   }
  // };

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

}