     
 
           //создание функции с помощью FunctionDeclaration(Именованые)
       let myFirstFunction = function  () {
            document.write("<p>Hello from MyFirstFunction!");
            document.write("<p>How are you?");
            document.write("<p>Goodbye!");
        }

       let mySecondFunction = function () {
            document.write("<p>Hello from MySecondFunction!");
        }
        // Вызов функций.


        console.log(myFirstFunction)
        myFirstFunction();

        document.write("<hr/>");

        // Вызов функций.
        mySecondFunction();

        document.write("<hr/>");
       

        //console.dir(window)
