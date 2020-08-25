import React from 'react'
import request from 'superagent'

import { Text, Reply } from '@botonic/react'

const forecastUrl = 'api.openweathermap.org/data/2.5/weather?q=Auckland&appid=edb09865421b065e3746b106c40bcf1b'

export default class extends React.Component {

    state = { }

    componentDidMount () {
        request.get(forecastUrl)
        .then(res => {
        const currentForecast = JSON.parse(res.body)
        this.setState({ forecast: currentForecast })
              })
            }

  render() {
    return (
      <>
      <Text>
          The weather in Auckland is {this.state.forecast.weather.main}. 
      </Text>
      </>
    )
  }
}