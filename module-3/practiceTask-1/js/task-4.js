const cafe= {
    name: "Republic",
    width:200,
    height: 300,
    personal:5,
    hr: true
    
    
};

const cafeKeys = Object.keys(cafe);

for(let i = 0; i<cafeKeys.length; i++){
    console.log(`${cafeKeys[i]}: ${Object.values(cafe)[i]}`);
}

console.log(`Площадь: ${cafe.width * cafe.height}`);

