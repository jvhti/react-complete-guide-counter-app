import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, decrement, deleteResult, increment, storeResult, subtract} from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
              <CounterOutput value={this.props.ctr}/>
              <CounterControl label="Increment" clicked={this.props.onIncrementCounter}/>
              <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}/>
              <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}/>
              <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}/>
              <hr/>
              <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
              <ul>
                {
                  this.props.storedResults.map((res) => (
                      <li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>))
                }
              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {ctr: state.ctr.counter, storedResults: state.res.results};
};

const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: () => dispatch(increment()),
      onDecrementCounter: () => dispatch(decrement()),
      onAddCounter: (value) => dispatch(add(value)),
      onSubtractCounter: (value) => dispatch(subtract(value)),
      onStoreResult: (result) => dispatch(storeResult(result)),
      onDeleteResult: (id) => dispatch(deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
