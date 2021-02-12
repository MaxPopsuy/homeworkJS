const formatString = function(string) {
    
    const arrString = string.split("");

    for (let i = 0; i < arrString.length; i++){
        if (arrString.length >= 40){
            const newArr = arrString.splice(39, arrString.length - 40);
            console.log(newArr);
        }
    }

    
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
formatString('Curabitur ligula sapien, tincidunt non.');
  // вернется оригинальная строка
  
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка