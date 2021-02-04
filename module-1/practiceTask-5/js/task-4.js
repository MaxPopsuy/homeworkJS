let heroName = "";


while (heroName.length < 6){
    heroName = prompt("Enter name of your favorite hero: ");
    if (heroName.length >= 6){
        break;
    }
    else {
        console.log(heroName);
    }
}


