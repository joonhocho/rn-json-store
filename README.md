# rn-json-store
React Native JSON storage. A wrapper around AsyncStorage.


### Install
```
npm install --save rn-json-store 
```


### Usage
```javascript
import Store from 'rn-json-store';

Store.set('numberValue', 1);
Store.set('stringValue', 'Hi');
Store.set('objectValue', {key: 'value'});

Store.get('numberValue').then((v) => v === 1);
Store.get('stringValue').then((v) => v === 'Hi');
Store.get('objectValue').then(({key}) => key === 'value');

Store.remove('numberValue');

Store.merge('objectValue', {key2: 'value2'});

Store.multiSet({key1: 'key1Value', key2: 'key2Value'});
Store.multiGet(['key1', 'key2']).then(({key1, key2}) => key1 === 'key1Value' && key2 === 'key2Value');
Store.multiRemove(['key1', 'key2']);
Store.multiMerge({key3: {a: 1}, key4: {b: 2}});
```


### TODO
 - Add tests


### Dependencies
 - React Native


### LICENSE
```

The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
