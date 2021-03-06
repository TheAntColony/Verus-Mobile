import { combineReducers } from 'redux'
import { authentication } from './authentication'
import { coins } from './coins'
import { ledger } from './ledger'
import { settings } from './settings'
import { electrum } from './cache/electrum'
import { headers } from './cache/headers'
import { customCoins } from './customCoins'

export default combineReducers({
  authentication,
  coins,
  ledger,
  settings,
  electrum,
  headers,
  customCoins
})