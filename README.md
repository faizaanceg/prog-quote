# prog-quote
A package module to generate random programming quotes

Add a pinch of wisdom to your webpage with this module! Consists a list of some famous/deep quotes said by some famous/admired professionals in the field of CS!

#How to install

``` 
npm install prog-quote 
```

#Version

Current version is <code> v2.0.0 </code>

#How to use

```
const quote = require('prog-quote')()
    
console.log(quote.next().value)
\\ { author: 'random author', quote: 'random quote'}
```

#Contributing

You can fork this repo and add any quotes that share some profound wisdom (or anything fun!). Then send a PR to merge with this main branch.

When there are substantially more quotes, I will update the npm module.

#MIT Licensed
