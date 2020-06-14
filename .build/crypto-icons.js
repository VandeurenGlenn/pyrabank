const { execSync } = require('child_process')


const currencies = [
  'trx',
  'btt',
  'btz',
  'hex',
  'eth',
  'bat',
  'ghost',
  'hex2t',
  'hex3d'
]

const tryCopy = crypto => {
  
  try {
	  return execSync(`cp node_modules/cryptocurrency-icons/svg/color/${crypto}.svg www/assets/logo/${crypto}.svg`)
  } catch (e) {
  	
  }
}

for (const crypto of currencies) {
  tryCopy(crypto)
}
