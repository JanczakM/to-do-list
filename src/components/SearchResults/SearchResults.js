import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    searchString: PropTypes.string,
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
    match: PropTypes.object,
  }

  static defaultProps = {
    title: 'Search Results',
  }

  changeState() {
    this.props.changeSearchString(this.props.match.params.id);
  }

  render() {
    const {title, cards} = this.props;

    return (
      <Container>
        <section className={styles.component} onLoad={this.changeState()}>
          <h3 className={styles.title}>{title}</h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }

}

export default SearchResults;
