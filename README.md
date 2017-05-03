# Measures weight converter

measures-converter is a little module that allow us to convert weight measures from kilograms to pounds or vice versa

## Description

- You could not enter a negative value
- You only can enter kilograms or pounds
- The measure must be a number

## Installation

```
npm install measures-converter
```

## Usage

```
import converter from 'measures-converter'

converter(1, 'kilograms') // 2.20462
converter(1, 'kilos') // 2.20462
converter(1, 'pounds') //0.45359
```

## Credits

- [Juan Guillermo Rivera](https://www.twitter.com/guillerivera325)

## License

[MIT](https://opensource.org/licenses/MIT)