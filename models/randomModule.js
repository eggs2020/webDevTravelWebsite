
let greetingArray = ['Welcome', 'Bienvenue', 'Welkom','Willkommen','Ahlan Wa Sahlan',
'Mabuhay','Salamat Datang','Tervetuloa','Salve','Benvenuto'];

//Function to generate random greeting when called
exports.randomGreeting = function(){
    //Generate random integer between 0 and 9
    let index = Math.floor( Math.random() * 10);

    return greetingArray[index];
}