
# React Native Sound Manager
[![npm version](https://badge.fury.io/js/react-native-draggable-view.svg)](https://badge.fury.io/js/react-native-draggable-view) ![](https://img.shields.io/github/issues/minhchienwikipedia/react-native-draggable-view.svg) ![](https://img.shields.io/github/forks/minhchienwikipedia/react-native-draggable-view.svg) ![](https://img.shields.io/github/stars/minhchienwikipedia/react-native-draggable-view.svg) ![](https://img.shields.io/github/license/minhchienwikipedia/react-native-draggable-view.svg)
#### This package help you easy to control audio with support cache url! 

---
This package requires these, please make sure you had installed them:
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-reanimated V2](https://github.com/software-mansion/react-native-reanimated)


## Getting started

`$ npm install react-native-draggable-view --save`

- OR

`$ yarn add react-native-draggable-view`

- All in one

`$ npm install react-native-draggable-view react-native-gesture-handler react-native-reanimated --save && cd ios && pod install`

## Usage
```javascript
import SoundManager from 'react-native-draggable-view';

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
  
