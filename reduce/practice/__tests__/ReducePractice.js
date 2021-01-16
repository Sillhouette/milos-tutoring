const practice = require('../ReducePractice')

describe('Reduce Practice', () => {
    describe('total', () => {
        test('should total an array of numbers correctly', () => {
            const numbers = [1, 2, 3, 4]
            const expected = 10

            const result = practice.total(numbers)
            
            expect(result).toEqual(expected)
        })
    })

    describe('product', () => {
        test('should multiply an array of numbers correctly', () => {
            const numbers = [1, 2, 3, 4]
            const expected = 24

            const result = practice.product(numbers)
            
            expect(result).toEqual(expected)
        })
    })
  
    describe('concatString', () => {
        test('should concat integers into a string', () => {
            const numbers = [1, 2, 3]
            const expected = "123"

            const result = practice.concatString(numbers)
            
            expect(result).toEqual(expected)
        })

        test('should concat strings into a string', () => {
            const strings = ["this ", "is ", "a ", "string"]
            const expected = "this is a string"

            const result = practice.concatString(strings)
            
            expect(result).toEqual(expected)
        })

        test('should concat booleans into a string', () => {
            const booleans = [ true, false, false, true]
            const expected = "truefalsefalsetrue"

            const result = practice.concatString(booleans)
            
            expect(result).toEqual(expected)
        })
    })

    describe('totalVotes', () => {
        test('returns the total number of people who have voted', () => {
            const voters = [
                {name:'Bob' , age: 30, voted: true},
                {name:'Jake' , age: 32, voted: true},
                {name:'Kate' , age: 25, voted: false},
                {name:'Sam' , age: 20, voted: false},
                {name:'Phil' , age: 21, voted: true},
                {name:'Ed' , age:55, voted:true},
                {name:'Tami' , age: 54, voted:true},
                {name: 'Mary', age: 31, voted: false},
                {name: 'Becky', age: 43, voted: false},
                {name: 'Joey', age: 41, voted: true},
                {name: 'Jeff', age: 30, voted: true},
                {name: 'Zack', age: 19, voted: false}
            ]
            const expected = 7

            const result = practice.totalVotes(voters)
            
            expect(result).toEqual(expected)
        })
    })

    describe('shoppingSpree', () => {
        test('returns the total price of the items on the wishlist', () => {
            const wishlist = [
                { title: "Tesla Model S", price: 90000 },
                { title: "4 carat diamond ring", price: 45000 },
                { title: "Fancy hacky Sack", price: 5 },
                { title: "Gold fidgit spinner", price: 2000 },
                { title: "A second Tesla Model S", price: 90000 }
            ]
            const expected = 227005
            
            const result = practice.shoppingSpree(wishlist)
            
            expect(result).toEqual(expected)
        })
    })

    describe('flatten', () => {
        test('returns a single array containing the values from each nested array', () => {
            const arrays = [
                ["1", "2", "3"],
                [true],
                [4, 5, 6]
            ]
            const expected = ["1", "2", "3", true, 4, 5, 6]
            
            const result = practice.flatten(arrays)
            
            expect(result).toEqual(expected)
        })
    })

    describe('voterResults', () => {
        test('returns an object representing the results of the vote', () => {
            const voters = [
                {name:'Bob' , age: 30, voted: true},
                {name:'Jake' , age: 32, voted: true},
                {name:'Kate' , age: 25, voted: false},
                {name:'Sam' , age: 20, voted: false},
                {name:'Phil' , age: 21, voted: true},
                {name:'Ed' , age: 55, voted:true},
                {name:'Tami' , age: 54, voted:true},
                {name: 'Mary', age: 31, voted: false},
                {name: 'Becky', age: 43, voted: false},
                {name: 'Joey', age: 41, voted: true},
                {name: 'Jeff', age: 30, voted: true},
                {name: 'Zack', age: 19, voted: false}
            ]
            const expected = { 
                numYoungVotes: 1,
                numYoungPeople: 4,
                numMidVotes: 3,
                numMidPeople: 4,
                numOldVotes: 3,
                numOldPeople: 4 
              }
            
            const result = practice.voterResults(voters)
            
            expect(result).toEqual(expected)
        })
    })
})