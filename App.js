import React, { useReducer } from 'react'
import { View } from 'react-native'

import List from './src/list'
import Input from './src/input'
import Title from './src/Title'
import { actionCreators, reducer, initialState } from './src/todo'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <View>
      <Title>To-Do List</Title>
      <Input
        placeholder={'Type a todo, then hit enter!'}
        onSubmitEditing={(title) => dispatch(actionCreators.add(title))}
      />
      <List
        items={state.items}
        onPressItem={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  )
}
