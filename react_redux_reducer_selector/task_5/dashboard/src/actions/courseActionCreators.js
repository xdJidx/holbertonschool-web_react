import { bindActionCreators } from 'redux';
import { selectCourse, unSelectCourse } from './actions/courseActionCreators';

// Example component or file where you want to bind the action creators
// Assuming you have access to the Redux store

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectCourse,
      unSelectCourse
    },
    dispatch
  );
};
