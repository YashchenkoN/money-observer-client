import {compose, withHandlers, withProps} from 'recompose';
import TransactionsHeader from './TransactionsHeader';

const enhance = compose(
    withProps(({navigation}) => ({
        isChartShown: (navigation.state.params && navigation.state.params.showChart) || false,
    })),

    withHandlers({
        onToggleChart: ({navigation, isChartShown}) => () => {
            navigation.setParams({
                showChart: !isChartShown
            })
        },
    })
);

export default enhance(TransactionsHeader);
