// 1. Create a function that takes an array of numbers and totals them
function total(numbers) {
    const initialValue = 0
    const add = (total, int) => total + int
    return numbers.reduce(add, initialValue)
}

// 2. Create a function that takes an array of numbers and multiplies them
function product(numbers) {
    const initialValue = numbers.length > 0 ? 1 : 0
    const multiply = (total, int) => total * int
    return numbers.reduce(multiply, initialValue)
}

// 3. Create a function that takes an array of strings and concatenates them
function concatString(items) {
    const initialValue = ''
    const concat = (result, item) => result + item
    return items.reduce(concat, initialValue)
}

// 4. Create a function that takes an array of items and a seperator then concatenates 
//   them with a seperator between each item. Seperator should not be added to the last item
function concatStringWithSeperator(items, seperator) {
    const initialValue = ''
    const isLast = (index, array) => (
        index === array.length - 1
    )
    
    const concatWithSeperator = (result, item, index, array) => (
        isLast(index, array) ? result + item : result + item + seperator
    )
    return items.reduce(concatWithSeperator, initialValue)
}

// 5. Create a function that takes an array of voter objects and totals the
//    number of people who have already voted
function totalVotes(voters) {
    const initialValue = 0
    const voteValue = voter => voter.voted ? 1 : 0
    const tallyVote = (total, voter) => total + voteValue(voter)
    return voters.reduce(tallyVote, initialValue )
}

// 6. Create a function that takes an array of wishlist items and totals the prices
function shoppingSpree(wishlist) {
    const initialValue = 0
    const getPrice = item => item.price ? item.price : 0
    const addItemPrice = (total, item) => total + getPrice(item)
    return wishlist.reduce(addItemPrice, initialValue)
}

// 7. Create a function that takes an array of arrays and joins them into a single array
// Note: Take a look at Array.concat() to help with this one
function flatten(nestedArrays) {
    const initialValue = []
    const concat = (result, array) => result.concat(array)
    return nestedArrays.reduce(concat, initialValue)
}

// 8. Given an array of potential voters, return an object representing the results of the vote
//    Include how many of the potential voters were in the ages 18-25, how many from 26-35, 
//    how many from 36-55, and how many of each of those age ranges actually voted. 
//    The resulting object containing this data should have 6 properties. 
function voterResults(voters) {
    const initialData = {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotes: 0,
        numMidPeople: 0,
        numOldVotes: 0,
        numOldPeople: 0 
    }

    const getAgeRange = (age) => {
        return age <= 25 ? "Young" : 
               age <= 35 ? "Mid" : 
               "Old"
    }

    const populateResults = (results, voter) => {
        const range = getAgeRange(voter.age)
        results[`num${range}People`] += 1
        if(voter.voted) {
            results[`num${range}Votes`] += 1
        }
        return results
    }
    return voters.reduce(populateResults, initialData)
 }

module.exports = {
    total,
    product,
    concatString,
    concatStringWithSeperator,
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults
}