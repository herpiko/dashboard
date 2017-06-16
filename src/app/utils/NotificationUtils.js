import React from 'react'

const notificationOpts = (title, message, action, children) => {
  return {
    // uid: 'once-please', // you can specify your own uid if required
    title: `${ title }`,
    message: `${ message }`,
    position: 'tr',
    autoDismiss: 2,
    action: action ? {
      label: 'Click me!!',
      callback: action
    } : null,
    children: children ? (
	    <div>
	      <h2>Hello World</h2>
	      <a>Anchor</a>
	    </div>
	  ): null
  }
}

export {
	notificationOpts
}