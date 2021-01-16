const practice = require('../src/ReducePractice')

describe('Reduce Practice', () => {
    describe('total', () => {
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.total([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test('returns 0 when passed []', () => {
            const numbers = []
            const expected = 0

            const result = practice.total(numbers)
            
            expect(result).toEqual(expected)
        })

        test('returns 10 when passed [1, 2, 3, 4]', () => {
            const numbers = [1, 2, 3, 4]
            const expected = 10

            const result = practice.total(numbers)
            
            expect(result).toEqual(expected)
        })

        test('returns 100 when passed [50, 30, 20]', () => {
            const numbers = [50, 30, 20]
            const expected = 100

            const result = practice.total(numbers)
            
            expect(result).toEqual(expected)
        })
    })

    describe('product', () => {
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.product([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test('returns 0 when passed []', () => {
            const numbers = []
            const expected = 0

            const result = practice.product(numbers)
            
            expect(result).toEqual(expected)
        })

        test('returns 24 when passed [1, 2, 3, 4]', () => {
            const numbers = [1, 2, 3, 4]
            const expected = 24

            const result = practice.product(numbers)
            
            expect(result).toEqual(expected)
        })

        test('returns 0 when passed [50, 30, 35, 0]', () => {
            const numbers = [50, 30, 35, 0]
            const expected = 0

            const result = practice.product(numbers)
            
            expect(result).toEqual(expected)
        })
    })

    describe('concatString', () => {
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.concatString([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test('returns "" when passed []', () => {
            const numbers = []
            const expected = ""

            const result = practice.concatString(numbers)
            
            expect(result).toEqual(expected)
        })

        test('returns "123" when passed [1, 2, 3]', () => {
            const numbers = [1, 2, 3]
            const expected = "123"

            const result = practice.concatString(numbers)
            
            expect(result).toEqual(expected)
        })

        test('returns "this is a string" when passed ["this ", "is ", "a ", "string"]', () => {
            const strings = ["this ", "is ", "a ", "string"]
            const expected = "this is a string"

            const result = practice.concatString(strings)
            
            expect(result).toEqual(expected)
        })

        test('returns "truefalsefalsetrue" when passed [ true, false, false, true]', () => {
            const booleans = [ true, false, false, true]
            const expected = "truefalsefalsetrue"

            const result = practice.concatString(booleans)
            
            expect(result).toEqual(expected)
        })
    })

    describe('concatStringWithSeperator', () => {
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.concatStringWithSeperator([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test('returns "" when passed [] and ", "', () => {
            const array = []
            const seperator = ", "
            const expected = ""

            const result = practice.concatStringWithSeperator(array, seperator)
            
            expect(result).toEqual(expected)
        })

        test('returns "" when passed [] and undefined', () => {
            const array = []
            const seperator = undefined
            const expected = ""

            const result = practice.concatStringWithSeperator(array, seperator)
            
            expect(result).toEqual(expected)
        })

        test('returns "123" when passed [1, 2, 3] and ""', () => {
            const numbers = [1, 2, 3]
            const seperator = ""
            const expected = "123"

            const result = practice.concatStringWithSeperator(numbers, seperator)
            
            expect(result).toEqual(expected)
        })

        test('returns "1, 2, 3" when passed [1, 2, 3] and ", "', () => {
            const numbers = [1, 2, 3]
            const seperator = ", "
            const expected = "1, 2, 3"

            const result = practice.concatStringWithSeperator(numbers, seperator)
            
            expect(result).toEqual(expected)
        })

        test('returns "this is a string" when passed ["this", "is", "a", "string"] and " "', () => {
            const strings = ["this", "is", "a", "string"]
            const expected = "this is a string"
            const seperator = " "
            const result = practice.concatStringWithSeperator(strings, seperator)
            
            expect(result).toEqual(expected)
        })

        test('returns "true, false, false, true" when passed [ true, false, false, true] and ", "', () => {
            const booleans = [ true, false, false, true]
            const seperator = ", "
            const expected = "true, false, false, true"

            const result = practice.concatStringWithSeperator(booleans, seperator)
            
            expect(result).toEqual(expected)
        })
    })

    describe('totalVotes', () => {
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.totalVotes([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test("returns 0 when passed []", () => {
            const voters = []
            const expected = 0

            const result = practice.totalVotes(voters)

            expect(result).toEqual(expected)
        })

        test('returns 0 when nobody has voted', () => {
            const voters = [
                {name:'Bob', age: 30, voted: false},
                {name:'Jake', age: 32, voted: false},
                {name:'Kate', age: 25, voted: false},
                {name:'Sam', age: 20, voted: false},
                {name:'Phil', age: 21, voted: false},
                {name:'Ed', age:55, voted:false},
                {name:'Tami', age: 54, voted:false},
                {name: 'Mary', age: 31, voted: false},
                {name: 'Becky', age: 43, voted: false},
                {name: 'Joey', age: 41, voted: false},
                {name: 'Jeff', age: 30, voted: false},
                {name: 'Zack', age: 19, voted: false}
            ]
            const expected = 0

            const result = practice.totalVotes(voters)
            
            expect(result).toEqual(expected)
        })

        test('returns the total number of people who have voted', () => {
            const voters = [
                {name:'Bob' , age: 30, voted: true},
                {name:'Jake', age: 32, voted: true},
                {name:'Kate', age: 25, voted: false},
                {name:'Sam' , age: 20, voted: false},
                {name:'Phil', age: 21, voted: true},
                {name:'Ed', age: 55, voted:true},
                {name:'Tami', age: 54, voted:true},
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
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.shoppingSpree([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test('returns 0 if no items are on the wishlist', () => {
            const wishlist = []
            const expected = 0
            
            const result = practice.shoppingSpree(wishlist)
            
            expect(result).toEqual(expected)
        })

        test('returns 0 if the item prices are 0', () => {
            const wishlist = [
                { title: "Tesla Model S", price: 0 },
                { title: "4 carat diamond ring", price: 0 },
                { title: "Fancy hacky Sack", price: 0 },
                { title: "Gold fidgit spinner", price: 0 },
                { title: "A second Tesla Model S", price: 0 }
            ]
            const expected = 0
            
            const result = practice.shoppingSpree(wishlist)
            
            expect(result).toEqual(expected)
        })

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

        test('doesnt break if item price isnt provided', () => {
            const wishlist = [
                { title: "Tesla Model S" }
            ]
            const expected = 0
            
            const result = practice.shoppingSpree(wishlist)
            
            expect(result).toEqual(expected)
        })
    })

    describe('flatten', () => {
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.flatten([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test('returns [] when given []', () => {
            const arrays = []
            const expected = []
            
            const result = practice.flatten(arrays)
            
            expect(result).toEqual(expected)
        })

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
        test('calls reduce', () => {
            const reduceSpy = jest.spyOn(Array.prototype, "reduce")

            practice.voterResults([])

            expect(reduceSpy).toHaveBeenCalled()
        })

        test('returns counts of 0 if passed an empty array', () => {
            const voters = []
            const expected = { 
                numYoungVotes: 0,
                numYoungPeople: 0,
                numMidVotes: 0,
                numMidPeople: 0,
                numOldVotes: 0,
                numOldPeople: 0
              }
            
            const result = practice.voterResults(voters)
            
            expect(result).toEqual(expected)
        })

        test('returns properly tallied counts', () => {
            const voters = [
                {name:'Bob' , age: 30, voted: true},
                {name:'Jake' , age: 32, voted: true},
                {name:'Kate' , age: 25, voted: false},
                {name:'Sam' , age: 20, voted: false},
                {name:'Phil' , age: 21, voted: true},
                {name:'Ed' , age: 55, voted: true},
                {name:'Tami' , age: 54, voted: true},
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