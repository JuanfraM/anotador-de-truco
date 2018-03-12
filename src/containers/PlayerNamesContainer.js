import { connect } from 'react-redux';
import PlayerNames from '../components/PlayerNames';

const mapStateToProps = state => ({
  nameEllos: state.names.ellos,
  nameNosotros: state.names.nosotros,
});


const PlayerNamesContainer = connect(
  mapStateToProps,
  {},
)(PlayerNames);

PlayerNamesContainer.propTypes = {};

export default PlayerNamesContainer;
