// notificationActionCreators.test.js

import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';

describe('markAsRead action creator', () => {
  it('should create an action to mark notification as read', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });
});

describe('setNotificationFilter action creator', () => {
  it('should create an action to set notification filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
