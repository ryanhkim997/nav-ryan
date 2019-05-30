import React from 'react';
import ReactDOM from 'react-dom';
// const modalRoot = document.getElementById('modal-root')

class SigninModal extends React.Component {

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.getElementById('modal-root').appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('modal-root').removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }

}

export default SigninModal;