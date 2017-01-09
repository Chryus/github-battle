import React from 'react'
import styles from '../styles'

export default React.createClass({
  render () {
    console.log(this)
    return (
       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input 
                className="form-control" 
                placeholder="Github Username"
                type="text" />
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
    );
  }
})