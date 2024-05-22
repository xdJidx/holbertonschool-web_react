import { bindActionCreators } from 'redux';
import { markAsRead, setNotificationFilter } from './actions/notificationActionCreators';

// Example component or file where you want to bind the action creators
// Assuming you have access to the Redux store

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      markAsRead,
      setNotificationFilter
    },
    dispatch
  );
};
