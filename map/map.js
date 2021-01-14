Map

Goal: take an array, iterate over it's elements, perform an action on each element,
      and return a new array with the results of each action

Example 1:

const numbers = [1, 2, 3, 4, 5, 6]

function squareNumbers(numbers) {
  return numbers.map(squareNumber)
}

function squareNumber(number) {
    return number * number
}

// squareNumbers(numbers) === [1, 4, 9, 16, 25, 36]

Example 2:

const people = [{ name: "Austin"}, {name: "Milos"}]

function addProfessionToPeople(people) {
  return people.map(addProfession)
}

function addProfession(person) {
  const profession = "Developer"

  person.profession = profession
  return person
}

Example 3: // Fetch from library

fetch(url)
.then(res => res.json)
.then(json => createBookHeaders(json))

// const json = [{title: "Another title"}, {title: "Some title for something"}]
function createBookHeaders(books){
  const headers = books.map(createBookHeader)

  // [h1, h1]

  for(i = 0; i < headers.length; i++) {
    headers[i]
  }
}

function createBookHeader(book) {
  const header = document.createElement("h1")
  header.value = book.title
  return header
}

Example 4:

const numbers = [1,2,3]

function addFour(numbers){
  // This return is for the addFour function
  return numbers.map(function(number) {
    return number + 4 // This is a return for the callback function
  })
}

1/13/21 prompt:

Given a sentence like "There is a lot of data here"
return the sentence "There's a lot of data here"

These changes should be made for the following:

"There is" => there's
"Where is" => where's
"Here is" => here's

1/14/21 map exercises:

1. doubleNumbers: Given an array of numbers, return a new array with each number doubled
2. stringifyArray: Given an array of numbers, return a new array with those numbers as strings
3. capitalizeNames: Given an array of proper nouns, return a new array with proper capitalization
4. namesOnly: Given an array of people objects, return an array of their names
5. eligibleForMatrix: Given an array of people object, return a list of eligibility for each person
    You must be at least 17 to enter the Matrix
6. createHtml: Given an array of people objexts, return an array of html-ized people
    Names should be surrounded by h1 tags
    Ages should be surrounded by h2 tags
