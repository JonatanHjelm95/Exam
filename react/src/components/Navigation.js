import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Login from './Login';
import facade from '../apiFacade'
import { ResultList } from './ResultList/ResultList';
import { words } from '../global/suggestion-words';
import './styles.scss';
import Home from './Home'
import Deliveries from './Deliveries'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
      loggedIn: facade.loggedIn()
    };

    this.searchSuggestionsRef = React.createRef();
  }

  componentDidMount() {
  this.intervalID = setInterval(
    () => this.checkIfLoggedIn(),
    1000
  );
    document.addEventListener('keydown', this.pressedEscape, false);
    document.addEventListener('mousedown', this.clickOutside);
  }
  checkIfLoggedIn() {
    this.setState({
      loggedIn: facade.loggedIn()
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressedEscape, false);
    document.removeEventListener('mousedown', this.clickOutside);
  }

  exampleAdd(e) {
    e.preventDefault();
  }

  search = e => {
    e.persist();

    const searchedWord = e.target.value.trim();

    if (searchedWord.trim().length == 0) {
      this.setState({ suggestions: [] });
      return;
    }

    const newSuggestions = words.filter(word => word.startsWith(searchedWord));
    this.setState({ suggestions: newSuggestions });
  };

  clickOutside = e => {
    if (
      this.searchSuggestionsRef.current != null &&
      !this.searchSuggestionsRef.current.contains(e.target)
    ) {
      this.setState({ suggestions: [] });
    }
  };

  pressedEscape = e => {
    if (e.keyCode === 27) {
      this.setState({ suggestions: [] });
    }
  };

  clickSuggestionItem = item => {
    alert('Clicked: ' + item);
  };

  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <Router>
          <div className="Header">
            <div className="container-buttons">
              <NavLink className="link" to="/" exact>
                <span>HOME</span>
              </NavLink>
              {loggedIn ? (<NavLink className="link" to="/deliveries">
                <span>Deliveries</span>
              </NavLink>) : (<p></p>)}

            </div>
            <div className="container-login">
              <Login />
            </div>
          </div>
           <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/deliveries" component={Deliveries} />
          </Switch> 
        </Router>

      </div>
    );
  }
}

export default Navigation;
