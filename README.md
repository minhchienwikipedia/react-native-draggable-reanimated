
# React Native Draggable Reanimated
[![npm version](https://badge.fury.io/js/react-native-draggable-reanimated.svg)](https://badge.fury.io/js/react-native-draggable-reanimated) ![](https://img.shields.io/github/issues/minhchienwikipedia/react-native-draggable-reanimated.svg) ![](https://img.shields.io/github/forks/minhchienwikipedia/react-native-draggable-reanimated.svg) ![](https://img.shields.io/github/stars/minhchienwikipedia/react-native-draggable-reanimated.svg) ![](https://img.shields.io/github/license/minhchienwikipedia/react-native-draggable-reanimated.svg)
#### This package help you easy to drag any view

<br><p><a href="https://www.buymeacoffee.com/minhchien"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="fateh999" /></a></p><br><br><br>

---
This package requires these, please make sure you had installed them:
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-reanimated V2](https://github.com/software-mansion/react-native-reanimated)

## Demo
<img src="./demo.gif" data-canonical-src="./demo.gif" width="200" height="400" />


## Getting started

```sh
npm install react-native-draggable-reanimated --save
```

- OR

```sh
yarn add react-native-draggable-reanimated
```

- All in one

```sh
npm install react-native-draggable-reanimated react-native-gesture-handler react-native-reanimated --save && cd ios && pod install
```

## Usage
```javascript
import DraggableView from 'react-native-draggable-reanimated';

<DraggableView
	initValue={{ x: 100, y: 100 }}
	onRelease={(val) => {
		console.log(val);
	}}>
	<View
		style={{
			backgroundColor: 'red',
			width: BOX_SIZE,
			height: BOX_SIZE,
		}}
	/>
</DraggableView>

```




## License

This module is [MIT licensed](./LICENSE)

---
  
