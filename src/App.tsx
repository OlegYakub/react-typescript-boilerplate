import * as React from "react";
// import { withRouter } from 'react-router';
// import connect from 'react-redux/es/connect/connect';
// import PropTypes from "prop-types";
// import {Alert} from './components/common';

interface Props {
  children: React.ReactNode
}

class App extends React.Component<Props, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
        {/*<Alert />*/}
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// const mapStateToProps = () => ({
//
// });
//
// const mapDispatchToProps = dispatch => bindActionCreators({
// }, dispatch);

// export default withRouter(connect(null)(App));
export default App;
