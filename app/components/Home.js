import React from 'react'
import { ReactRouter, Link } from 'react-router'
import MainContainer from '../containers/MainContainer'


export default React.createClass({
  render() {
    return (
      <MainContainer>
        <p className="lead">Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>
            Get Started
          </button>
        </Link>
      </MainContainer>
    )
  }
})