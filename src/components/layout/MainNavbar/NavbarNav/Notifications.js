import React from "react";
import { Link } from 'react-router-dom';
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
            <i className="material-icons">&#xE7F4;</i>
            <Badge pill theme="danger">
              2
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                {/* <i className="material-icons">&#xE6E1;</i> */}
                <img src={require("../../../../assets/images/avatars/1.jpg")} alt="user" width="35" className="rounded-circle" />
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Pavan kumar</span>
              <p>Donec ac condimentum massa. Etiam pellentesque pretium lacus. Phasellus ultricies dictum suscipit. Aenean commodo</p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Sales</span>
              <p>
                Last week your store’s sales count decreased by{" "}
                <span className="text-danger text-semibold">5.52%</span>. It
                could have been worse!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            <Link to={'/notifications'}>View all Notifications</Link>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
