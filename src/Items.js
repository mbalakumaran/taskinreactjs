import React, { Component } from "react";
import './item.css'

class Items extends Component {
	render() {
		const item = this.props.item;
		return (
			<div className="users">
				<div className="users-list">
					<div className="users-text">{item.email}</div>
					<div className="users-text">{item.name}</div>
          <button className="link-btn" >
            View
          </button>
				</div>
			</div>
		);
	}
}
export default Items;
