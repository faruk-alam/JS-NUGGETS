// optional chaining - && or ?. operator
const people = [
    {
        name: 'bob',
        city: 'los angeles',
        location : {street: '123 main st',timezone: {offset: '+7:00'}}
    },
    {
        name: 'peter',
        city: 'new york',
        location : {street: '123 broad st'}
    },
    {
        name: 'susy',
        city: 'chicago',
        location : {street: '123 apple st',timezone: {offset: '+5:00'}}
    }
]
people.forEach(person => {
    //console.log(person.name);
    //console.log(person.location);
    //console.log(person.location.timezone);
    //console.log(person.location.timezone.offset);
    // console.log(
    //     person.location && person.location.timezone && person.location.timezone.offset
    // )
    console.log(person.location?.timezone?.offset || 'local timezone');

})