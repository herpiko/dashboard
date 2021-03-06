import React from "react"
import { Link } from "react-router"

const ActionButton = (props) => {
	return (
	  <div className="row">
	  	<div className="col-md-6">
				<button type="button" className="btn btn-success create-button">Create Group</button>
	  	</div>
	  </div>
	)
}

export default ActionButton

// export default class ActionButton extends React.Component {
// 	render() {
// 		return (
// 	    <div className="row">
// 	      <div className="col-md-6 col-md-offset-3">
// 	        <div className="btn-group btn-group-justified" style={{ marginBottom: '10px' }} role="group" aria-label="...">
// 	          <div className="btn-group" role="group">
// 	            <button type="button" className="btn btn-default">
// 	              <i className="fa fa-check fa-fw" aria-hidden="true"></i>
// 	              <span className="visible-lg-inline">&nbsp; Create</span>
// 	            </button>
// 	          </div>
// 	          <div className="btn-group" role="group">
// 	            <button type="button" className="btn btn-info">
// 	              <i className="fa fa-rocket fa-fw" aria-hidden="true"></i> 
// 	              <span className="visible-lg-inline">&nbsp; Create &amp; Deploy</span>
// 	            </button>
// 	          </div>
// 	          <div className="btn-group" role="group">
// 	            <button type="button" className="btn btn-danger">
// 	              <i className="fa fa-times fa-fw" aria-hidden="true"></i>
// 	              <span className="visible-lg-inline">&nbsp; Cancel</span>
// 	            </button>
// 	          </div>
// 	        </div>
// 	      </div>
// 	    </div>
// 		)
// 	}
// }