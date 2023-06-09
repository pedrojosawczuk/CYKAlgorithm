# CYK Algorithm

This is a set of JavaScript codes that implement the CYK (Cocke-Younger-Kasami) algorithm to determine whether a given string is generated by a context-free grammar.

## Requirements

- Node.js (version 10 or higher)

## Installation

1. Clone the repository or download the files.
2. Make sure you have Node.js installed correctly on your machine.
3. Open a terminal and navigate to the directory of the files.

## Usage

1. Create a grammar file following the specified format below. For example, you can create a file called `grammar.txt` with the grammar you want to test.

```
S -> AB | BC
A -> BA | a
B -> CC | b
C -> AB | a
```

2. Open the terminal or command prompt and navigate to the directory where the code files are located.

3. Execute the following command:

```bash
node main.js grammar.txt string
```
The program will output whether the input string can be generated by the grammar or not. `The string <string> can be generated by the grammar.` or `The string <string> cannot be generated by the grammar.`
## Instructions for Running the CYK Algorithm in Your Program

Follow the steps below to run the CYK algorithm in your JavaScript code:

1. Download the necessary files: cyk.js and grammar.txt.

2. In your JavaScript code, import the provided `readGrammar` and `cyk` modules:

```js
const { readGrammar, cyk } = require('./cyk.js');
```

3. Use the `readGrammar` function to read the grammar from the file:

```js
const grammar = readGrammar('grammar.txt');
```

4. Next, you can call the cyk function to test if a given string is generated by the grammar:

```js
const string = 'baaba';
const result = cyk(grammar, string);
console.log(result); // true or false
```

5. Run your JavaScript code using Node.js to see the result:
```bash
$ node <filename>.js
```
6. Make sure to replace <filename>.js with the name of the file where you're writing the code.

## Automated Testing
The `test.js` file includes an example of automated testing to check multiple strings against the provided grammar. To run the test, you can simply execute the following command:
```bash
$ node test.js
```

The test will run the CYK algorithm for each input string and check if the result matches the expected outcome.