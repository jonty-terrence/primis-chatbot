import React from 'react'
import { Text } from '@botonic/react'

export default class extends React.Component {
  static async botonicInit({ input, session, params, lastRoutePath }) {
    /* This is how you fetch data from an API: */
    //const res = await fetch('https://api.example.com/user')
    //const user = await res.json()

    /* The "context" object allows you to keep data between
       requests from the same user */
    return { name: 'Primis chatbot' }
  }

  render() {
    return (
      <>
        <Text>
          Hey {this.props.name}, what can I help you with?
        </Text>
      </>
    )
  }
}
