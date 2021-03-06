import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchedCards} from '../../redux/cardsRedux';
import {createAction_changeSearchString} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  return {
    cards: getSearchedCards(state, props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)), //change serarchstring in app state
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
