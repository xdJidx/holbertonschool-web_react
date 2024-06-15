import { normalizedNotifications } from './notifications';

describe('normalizedNotifications', () => {
  it('should contain the correct result array', () => {
    const expectedNotifications = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      // Ajoutez ici d'autres identifiants de notifications
    ];

    expect(Object.keys(normalizedNotifications.entities.notifications)).toEqual(expectedNotifications);
  });

  it('should contain a correct users entity', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedUser = {
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    };

    expect(normalizedNotifications.entities.users[userId]).toEqual(expectedUser);
  });

  it('should contain a correct messages entity', () => {
    const messageGuid = 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41';
    const expectedMessage = {
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    };

    expect(normalizedNotifications.entities.messages[messageGuid]).toEqual(expectedMessage);
  });

  it('should contain a correct notifications entity', () => {
    const notificationId = '5debd7642e815cd350407777';
    const expectedNotification = {
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
    };

    expect(normalizedNotifications.entities.notifications[notificationId]).toEqual(expectedNotification);
  });
});
