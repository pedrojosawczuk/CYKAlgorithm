const { readGrammar, cyk } = require('./cyk.js')

const grammar = readGrammar('gramatica.txt')

// Array containing all inputs to be tested
const inputArray =
[
    'baaba',
    'aababba',
    'ababa',
    'abbba',
    'aa',
    'bb'
]

// Array containing the expected results of the cyk function, at the same position as their corresponding element in the 'inputArray'
const expectedResult =
[
    true,
    true,
    true,
    true,
    false,
    false
]

try
{
    // Checks if both arrays have the same number of elements
    if (inputArray.length !== expectedResult.length)
    {
        // If they have different lengths, it throw an error message indicating that the operation cannot be performed.
        throw new Error(`Arrays have different lengths. Cannot perform the operation.`)
    }
    
    // Tests the Grammar with the inputs 
    for (let i = 0; i<inputArray.length; i++)
    {
        console.log(`[TEST] Grammar: ${i+1}/${inputArray.length}`)
        const result = cyk(grammar, inputArray[i])
        if(result === expectedResult[i])
            console.log('\x1b[32m%s\x1b[0m', `  Status: PASSED!\n`)
        else
            console.log('\x1b[31m%s\x1b[0m', `  Status: FAILED!\n`)
    }
}
catch (error)
{
    console.error(error)
    return
}