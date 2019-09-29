import React, { Component } from "react";

class PopUp extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: "inline" }}>
        <a href="#" data-toggle="modal" data-target="#exampleModalLong">
          سياسة الخصوصية
        </a>
        {/* <button
          type="button"
          className="btn btn-link"
          data-toggle="modal"
          data-target="#exampleModalLong"
          style={{ display: "inline" }}
        >
          privacy policies
        </button> */}

        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  سياسة الخصوصية
                </h5>
                {/* <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>
              <div className="modal-body">سياسية الخصوصية تكتب هنا</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary ml-3"
                  data-dismiss="modal"
                  onClick={this.props.onAccept}
                >
                  أوافق
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.props.onDecline}
                >
                  لا أوافق
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
