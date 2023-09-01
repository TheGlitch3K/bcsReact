import { Store } from "react-notifications-component";

export const Notification = (message,type) => {
    Store.addNotification({
        message: message,
        type: type,
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
}
