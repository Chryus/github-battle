import React from 'react'
import styles from '../styles'

export default React.createClass({
  render() {
    return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
        <h1>{this.props.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.props.onSubmitUser}>
            <div className="form-group">
              <input 
                className="form-control" 
                placeholder="Github Username"
                type="text"
                onChange={this.props.onUpdateUser} 
                value={this.props.username} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit">
                  Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    ) 
  }
});