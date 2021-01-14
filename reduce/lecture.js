Reduce:

Reduce is used when you have a collection of items, and you want
to reduce them into a single value

ex:

Given: const numbers = [1,2,3,4]
Prompt: Turn the given array into a single value by adding them all together

numbers.reduce(function(total, currentVal) {
  return total += currentVal
}) //10


Parts of the reduce function:

  1. collection you are working on ('numbers' array)
  2. callback function
  3. starting point (optional)

Parts of the callback function:
  1. running total ('total')
  2. current value ('currentVal')

numbers.reduce(callback) //10

function callback(total, currentVal) {
  return total += currentVal
}

// with starting point
numbers.reduce(callback, 10) //20

Strings example:

const sentence = ["This", "is", "a", "sentence"]

sentence.reduce(function(acc, currentVal) {
  return acc += currentVal
}) // "Thisisasentence"

// With starting point:

function callback(acc, currentVal) {
  return `${acc} ${currentVal}`
}

sentence.reduce(callback, "1.") // "1. This is a sentence"

Booleans example:

const bools = [true, true, true, true, true]

function allTrue(acc, currentVal) {
  return acc && currentVal
}

bools.reduce(allTrue)

Case Study:

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

Refactored:

let allWagesFor = function () {
  const getDateFromEvent = event => event.date

  const eligibleDates = this.timeInEvents.map(getDateFromEvent)

  function accumulateWages(total, date) {
      return total + wagesEarnedOnDate.call(this, date)
  }.bind(this)

  const payable = eligibleDates.reduce(accumulateWages)

  return payable
}
