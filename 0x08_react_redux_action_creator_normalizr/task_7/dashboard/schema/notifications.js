export function getAllNotificationsByUser(userId) {
  const notifications = normalizedNotifications.entities.notifications;
  const userNotifications = [];

  for (const notificationId in notifications) {
    const notification = notifications[notificationId];
    if (notification.author === userId) {
      userNotifications.push(notification);
    }
  }

  return userNotifications;
}
