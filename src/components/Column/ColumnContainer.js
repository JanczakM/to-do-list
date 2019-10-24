import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumns} from '../../redux/cardsRedux';
import {createAction_addCard} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
