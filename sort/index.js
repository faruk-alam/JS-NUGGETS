// sort() - sorts the elements of an array in place and returns the sorted array.sorts elements as strings
// in lexico-graphical order,Not alphabetial.
// The default sort order is ascending, built upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.
// lexicographic = (alphabet + number + symbols) as a string.

 const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);

    const array1 = [1, 30, 4, 21, 100000];

    array1.sort();
    //console.log(array1);
    // using compare function
    //array1.sort((a,b) => a - b);
    // reverse order
    array1.sort((a,b) => b - a); 
    console.log(array1);

    const students =[{name: "Russel",Age : 23, gpa : 4.98},
                     {name: "undev",Age : 28, gpa : 3.75},
                     {name: "grimson",Age : 31, gpa : 4.33},
                     {name: "sabina",Age : 19, gpa : 2.90}]

      students.sort((a,b) => a.Age - b.Age);
      console.log(students);
      students.sort((a,b) => a.gpa - b.gpa);
      console.log(students)

