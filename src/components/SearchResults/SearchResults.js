  
import React from 'react';
import PropTypes from 'prop-types';
import styles from './../Column/Column.scss';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    columns: PropTypes.array,
    cards: PropTypes.array,
    icon: PropTypes.string,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <Container>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
          </h3>
          <div className={styles.cards}>
            {cards.map((cardData) => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;