The spread operator (...) is a syntax introduced in JavaScript that allows an iterable, such as an array, to be expanded into individual elements. When used with arrays, the spread operator helps to merge or concatenate arrays together.

Here's an example to illustrate the behavior of the spread operator in array merging:

'''
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
'''


import { Account } from '../components/Account'
import { Connect } from '../components/Connect'
import { Connected } from '../components/Connected'
import { Counter } from '../components/Counter'
import { NetworkSwitcher } from '../components/NetworkSwitcher'

      <Connect />

      <Connected>
        <Account />
        <hr />
        <Counter />
        <hr />
        <NetworkSwitcher />
      </Connected>
