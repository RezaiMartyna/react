import React from 'react';
import styles from './List.scss';
import Hero from './../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from './../Column/Column.js';



class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        src: PropTypes.string,
        children: PropTypes.node,
        

      }

    static defaultProps = {
        children: <p>Areas i have stuff to do</p>,
    }

    render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} src={this.props.src} />
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
            <Column title={['Home']}/>
            <Column title={['job']}/>
            <Column title={['school']}/>
        </div>
      </section>
    )
  }
}

export default List;