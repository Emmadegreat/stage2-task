'use client'

import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import  store  from './store'

export const Providers = ({ children }: Readonly<{ children:React.ReactNode }>) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )


}