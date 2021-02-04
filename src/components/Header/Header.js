import React from 'react';
import styles from './Header.scss';
import { NavLink, Link } from 'react-router-dom';
import Icon from './../Icon/Icon';
import Container from '../Container/Container';
import {settings} from './../../data/dataStore';
import Search from './../Search/SearchContainer';


class Header extends React.Component {

  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.HeaderIcon} />
            </Link>
            <Search></Search>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header> 
    );
  }
}

export default Header;