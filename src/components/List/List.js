import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
/*  state = {
    columns: this.props.columns || [],
  } */

  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  /*
  addColumn(title){
      this.setState(state => (
        {
          columns: [
            ...state.columns,
            {
              key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
              title,
              icon: 'list-alt',
              cards: [],
            },
          ],
        }
      ));
    }
  */

  render() {
    const {title, image, description, columns, addColumn} = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} imageLink={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}

export default List;
