import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Cell from '../Cell'

class Board extends Component {
  static propTypes = {
    puzzle: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }

  renderGrid () {
    const { puzzle } = this.props
    /* eslint-disable react/no-array-index-key */
    return (
      <table>
        <caption>Sudoku board</caption>
        <tbody>
          {puzzle.map((row, i) => (
            <tr key={`${i}`}>
              {row.map((value, j) => (
                <td key={`${j}`}>
                  <Cell coords={{ i, j }} value={value} puzzle={puzzle} />
                </td>))
              }
            </tr>
          ))}
        </tbody>
      </table>
    )
    /* eslint-enable react/no-array-index-key */
  }

  render () {
    return <div>{ this.renderGrid() }</div>
  }
}

const mapStateToProps = state => state.puzzle

export default connect(mapStateToProps)(Board)
