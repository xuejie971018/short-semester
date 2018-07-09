import React from 'react';
import { connect } from 'dva';

class TestPage extends React.Component {　

  render() {
    return (
      <div>
        当前页路由 {this.props.location.pathname}
      </div>
    )
  }


}

export default connect()(TestPage);