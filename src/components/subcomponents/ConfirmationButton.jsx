import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ConfirmationButton extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
    this.props.onConfirm()
  }

  render() {
    const {className, label, color, variant, title, message} = this.props
    return (
      <React.Fragment>
        <Button
          className={className}
          onClick={this.handleClickOpen} 
          color={color}
          variant={variant}
        >
          {label}
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            { 
              message
              ? <DialogContentText id="alert-dialog-description">
                  {message}
                </DialogContentText>
              : null
            }            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" variant='raised' autoFocus>
              {label}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmationButton
