// 1. Create a function that takes an array of numbers and totals them
function total(numbers) {
    return numbers.reduce((total, int) => total + int, 0)
}

// 2. Create a function that takes an array of numbers and multiplies them
function product(numbers) {
    return numbers.reduce((total, int) => total * int, 1)
}

// 3. Create a function that takes an array of strings and concatenates them
function concatString(items) {
    return items.reduce((total, item) => total + item, '')
}

// 4. Create a function that takes an array of voter objects and totals the
//    number of people who have already voted
function totalVotes(voters) {
      return voters.reduce((total, voter) => total + (voter.voted ? 1 : 0), 0 )
}

// 5. Create a function that takes an array of wishlist items and totals the prices
function shoppingSpree(wishlist) {
    return wishlist.reduce((total, item) => total + item.price, 0)
}

// 6. Create a function that takes an array of arrays and joins them into a single array
// Note: Take a look at Array.concat() to help with this one
function flatten(nestedArrays) {
    return nestedArrays.reduce((total, array) => total.concat(array), [])
}

// 7. Given an array of potential voters, return an object representing the results of the vote
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
    totalVotes,
    shoppingSpree,
    flatten,
    voterResults
}