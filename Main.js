//Create array of objects
const person = [
    {
    name: 'Barry',
    age: 99,
    job: 'fisherman'},
    {
    name: 'Sally',
    age: 89,
    job: 'I.T. consultant'
    },
    {
    name: 'Gary',
    age: 79,
    job: 'wrestler'
    },
    {
    name: 'Mary',
    age: 69,
    job: 'political advisor'
    }];

    //Create Arrays
    const weather = ['sunny.', 'raining.', 'hot.', 'cold.', 'overcast.', 'stormy.'];
    const sport = ['tennis', 'football', 'snooker', 'golf', 'squash'];
    const food = ['cakes', 'apples', 'pies', 'fish', 'biscuits', 'crisps'];
    const locations = ['beach', 'park', 'cliffs', 'wood', 'airport'];
    

    //Generate random number between 0 and passed array length
    const RandNumGen = (array) =>{
        const num = Math.floor(Math.random()*array.length);
        return num;
    }

    

    //Function to generate random message
    const mixMessage = () =>{

    //Store random selection of each array in a variable
    let w = RandNumGen(weather)
    let s = RandNumGen(sport)
    let f = RandNumGen(food)
    let l = RandNumGen(locations)

    //Store random selection of age,job & name
    let persName = RandNumGen(person);
    let persAge = RandNumGen(person);
    let persJob = RandNumGen(person);

    document.getElementById("mix").innerHTML = person[persName].name + ' who is ' + person[persAge].age + ' and is an expert ' + person[persJob].job + ', enjoys playing ' + sport[s] + ' and eating ' + food[f] + ' at the ' + locations[l] + ' when it is ' + weather[w];
    }


    