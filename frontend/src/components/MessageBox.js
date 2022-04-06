import Alert from 'react-bootstrap/ALert';

function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}

export default MessageBox;
