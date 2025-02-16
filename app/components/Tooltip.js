import React, { Component } from 'react'
import Hover from './Hover'
const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  }
}

export default function Tooltip({ text, children }) {
  return (
    <Hover>
      {
        (hovering) => {
          return <div style={styles.container}>
            {hovering === true && <div style={styles.tooltip}>{text}</div>}
            {children}
          </div>
        }
      }
    </Hover>

  )
}
