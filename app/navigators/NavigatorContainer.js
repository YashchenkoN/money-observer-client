import { connect } from 'react-redux';
import NavigatorView from './NavigatorView';

const NavigatorContainer = connect(({ navigator }) => ({
    navigator
}))(NavigatorView);

export default NavigatorContainer;
