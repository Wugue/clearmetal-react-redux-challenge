import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Notification from "./Notification";
import { removeNotification } from "../store/actions";

const Notifications = ({ actions, notifications }) => {
  const { removeNotification } = actions;
  return (
    <ul className="notifications">
      {notifications.map(notification => {
        return (
          <Notification {...notification} onDismissClick={() => removeNotification()} />
        );
      })}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeNotification }, dispatch)
});

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);