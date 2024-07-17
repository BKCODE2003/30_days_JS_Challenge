// Activity 1

    // Task 1
        console.log("1 to 10")
        for(var i=1;i<=10;i++){
            console.log(i)
        }

    // Task 2
        console.log("Table of 5")
        for(var j=1;j<=10;j++){
            console.log(5*i)
        }
// Activity 2

    // Task 3

        var sum=0,k=1
        while(k<=10){
            sum+=k
            k++
        }
        console.log("Sum of 1 to 10 is ",sum);

    // Task 4
        console.log("10 to 1")
        var num=10
        while(num>0){
            console.log(num);
            num--
        }
    
// Activity 3        

    // Task 5
        console.log("1 to 5")
        var task5=1
        do{
            console.log(task5);
            task5++
        }while(task5<=5)

    // Task 6
    
        var fact=1,fact_of=5,factorial=1
        do{
           factorial=factorial*fact
           fact++
        }while(fact<=fact_of)
        console.log("Factorial of ",fact_of," is ",factorial);

// Activity 4

    // Task 7
        console.log("Pattern");
        for(var row=0;row<5;row++){
            for(var col=0;col<=row;col++){
                process.stdout.write("* ")
            }
            console.log();
        }
       

// Activity 5

    // Task 8
        console.log("1 to 10 but skip 5")
        for(var i=1;i<=10;i++){
            if (i==5){
                continue
            }
            console.log(i)
        }
        
    // Task 9
        console.log("1 to 10 but stop at 7")
        for(var i=1;i<=10;i++){
            if (i==7){
                break
            }
            console.log(i)
        }