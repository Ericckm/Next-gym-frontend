import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

import { Provider } from 'react-redux'
import store from '../redux/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
