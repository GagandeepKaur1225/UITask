import React, { useEffect } from 'react';

import PushNotification from 'react-native-push-notification';

const NotificationHandler = () => {
  const onNotification = notification => {
    console.log('NotificationHandler:', notification);

    if (typeof _onNotification === 'function') {
      _onNotification(notification);
    }
  };

  const onRegister = token => {
    console.log('NotificationHandler:', token);

    if (typeof _onRegister === 'function') {
      _onRegister(token);
    }
  };

  const onAction = notification => {
    console.log('Notification action received:');
    console.log(notification.action);
    console.log(notification);

    if (notification.action === 'Yes') {
      PushNotification.invokeApp(notification);
    }
  };

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  const onRegistrationError = err => {
    console.log(err);
  };

  let _onRegister = null;
  let _onNotification = null;

  const attachRegister = handler => {
    _onRegister = handler;
  };

  const attachNotification = handler => {
    _onNotification = handler;
  };

  useEffect(() => {
    const handler = {
      onRegister: onRegister,
      onNotification: onNotification,
      onAction: onAction,
      onRegistrationError: onRegistrationError,
    };

    PushNotification.configure({
      onRegister: handler.onRegister,
      onNotification: handler.onNotification,
      onAction: handler.onAction,
      onRegistrationError: handler.onRegistrationError,
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    return () => {
      // Clean up code
    };
  }, []);

  return null;
};

export default NotificationHandler;
