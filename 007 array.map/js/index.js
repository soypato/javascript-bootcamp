const fullNames = [
    {
        first: 'Albus', 
        last: 'Dumbledore'
        
    },
    {
        first: 'Harry', 
        last: 'Potter'
    },
    {
        first: 'Hermione', 
        last: 'Granger'
        
    }, 
    {
        first: 'Ron', 
        last: 'Weasley'
        
    }, 
    {
        first: 'Rubeus',
        last: 'Hagrid'

    },
    {
        first: 'Minerva', 
        last: 'McGonagall'
        
    }, 
    {
        first: 'Severus', 
        last: 'Snape'
    
    }
    ];

// normal function
const firstNameWithNormalFunction = fullNames.map(function(name){
	return name.first;
})

// arrow function
const firstName = fullNames.map(names => (`${names.first}`));

// logs
console.log(firstName);
console.log(firstNameWithNormalFunction);
