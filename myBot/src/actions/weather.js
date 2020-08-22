import React from 'react'
import { Text, Reply } from '@botonic/react'

const res = await fetch('api.openweathermap.org/data/2.5/weather?q=auckland&appid=edb09865421b065e3746b106c40bcf1b')
const user = await res.json()

export default class extends React.Component {

  render() {
    return (
      <>
      <Text>
          The weather in Auckland is {user.weather.main}, {user.weather.description}. 
      </Text>
      </>
    )
  }
}