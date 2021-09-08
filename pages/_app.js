import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Provider, useDispatch} from "react-redux";
import {store} from "../redux/store";
import {useEffect} from "react";
import {preloadState} from "../redux/localStorageMiddleware";
import {setCatalog} from "../redux/catalog";

function Wrapper({children}) {
  const dispatch = useDispatch()
  useEffect(() => {
    const state = preloadState()
    if (state) dispatch(setCatalog(state.catalog))
  }, [])
  return children
}

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  </Provider>
}

export default MyApp
