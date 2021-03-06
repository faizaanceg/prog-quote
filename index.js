const random = require('random-js')()

module.exports = function* () {
    const authors = [
        'Ken Thompson',
        'Dennis Ritchie',
        'John F. Woods',
        'Linus Torvalds',
        'Vint Cerf',
        'Jon Skeet',
        'Richard Mansfield',
        'Doug McIlroy',
        'Unknown',
        'Edsger Dijkstra',
        'Kelly Johnson',
        'Chris Heilmann'
    ]

    const quotes = [
        'When in doubt, use brute force.',
        'Unix is simple. It just takes a genius to understand its simplicity.',
        'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
        'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
        'There was something amazingly enticing about programming.',
        'At a deep level, all code is about communication: expressing ideas about what you want to achieve.',
        'OOP is to writing a program, what going through airport security is to flying.',
        'As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow.',
        'Profanity is the one language all programmers know best.',
        'Simplicity is prerequisite for reliability.',
        'Keep it simple stupid.',
        'Java is to JavaScript what Car is to Carpet.'
    ]

    while (true) {
        const index = random.integer(0, 11)
        yield {
            author: authors[index],
            quote: quotes[index]
        }
    }
}
























