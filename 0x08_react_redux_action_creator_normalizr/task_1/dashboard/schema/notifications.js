import { normalize, schema } from 'normalizr';

// Définir un schéma d'entité pour l'utilisateur
const user = new schema.Entity('users');

// Définir un schéma d'entité pour le message
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Définir un schéma d'entité pour la notification
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Données de notification initiales
const notificationsData = [
  // Insérez ici vos données de notification
];

// Normaliser les données de notification
export const normalizedNotifications = normalize(notificationsData, [notification]);
