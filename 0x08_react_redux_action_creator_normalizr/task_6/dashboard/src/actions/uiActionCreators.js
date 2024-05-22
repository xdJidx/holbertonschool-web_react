import { bindActionCreators } from 'redux';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './actions/uiActionCreators';

// Example component or file where you want to bind the action creators
// Assuming you have access to the Redux store

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer
    },
    dispatch
  );
};
