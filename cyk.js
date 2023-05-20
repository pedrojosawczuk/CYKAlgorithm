const fs = require('fs')

function readGrammar(filename)
{
  try
  {
    const grammar = {}
    const data = fs.readFileSync(filename, 'utf8')
    const lines = data.split('\n')

    for (let line of lines)
    {
      line = line.trim()

      if (line)
      {
        const [left, right] = line.split('->')
        const nonTerminal = left.trim()
        const productions = right.split('|').map(prod => prod.trim())
        grammar[nonTerminal] = productions
      }
    }
    return grammar
  }
  catch (error)
  {
    console.error('Error reading grammar:', error);
    return null
  }
}

function cyk(grammar, string)
{
  try
  {
    const n = string.length
    const table = new Array(n).fill(null).map(() => new Array(n).fill(new Set()))
    
    for (let i = 0; i < n; i++)
    {
      for (const [nt, prods] of Object.entries(grammar))
      {
        for (const prod of prods)
        {
          if (prod.length === 1 && prod === string[i])
          {
            table[0][i].add(nt)
          }
        }
      }
    }

    for (let l = 2; l <= n; l++)
    {
      for (let s = 0; s <= n - l; s++)
      {
        for (let p = 1; p < l; p++)
        {
          for (const [nt, prods] of Object.entries(grammar))
          {
            for (const prod of prods)
            {
              if (prod.length === 2)
              {
                const [A, B] = prod
                if (table[p - 1][s].has(A) && table[l - p - 1][s + p].has(B))
                {
                  table[l - 1][s].add(nt)
                }
              }
            }
          }
        }
      }
    }

    return table[n - 1][0].has('S')
  }
  catch (error)
  {
    console.error('Error applying CYK algorithm:', error)
    return false
  }
}

module.exports = { readGrammar, cyk }