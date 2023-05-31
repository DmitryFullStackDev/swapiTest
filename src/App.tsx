import { RouterProvider } from 'react-router-dom'
import { router } from './constants'
import * as React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
