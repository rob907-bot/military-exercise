var name = 'Rugen';
var rank = 'Private';
var age = '23';

if (age < 18){
    console.log('Sorry, you are too young for the military!')

} else if (name === 'Rugen' && rank === 'Count'){
    console.log('My name is Inigo Montoya, you killed my father, prepare to die!');

} else if (rank === 'Captain'){
    console.log(`Aye Aye Captain, ${name}!`);

} else if (rank === 'Private' && age > 40){
    console.log(`What have you been doing with your life ${name}?`);

} else {
    console.log(`Hello ${rank} ${name}, I cannot wait to celebrate your ${age + 1}th birthday this year!`)
}