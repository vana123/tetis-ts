import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Import Tetris component
import Tetris from './components/tetris'

// Import styles
import './styles/styles.css'

ReactDOM.render(<Tetris boardWidth="14" boardHeight="30" />, document.getElementById('root'))