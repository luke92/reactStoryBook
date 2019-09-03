import * as React from 'react';
import './App.css';
import Router from './Router';

class App extends React.Component {
    /* async componentWillMount() {
  // TODO
  // await this.props.sessionStore!.getCurrentLoginInformations();
} */

    render() {
        return <Router />;
    }
}

export default App;
