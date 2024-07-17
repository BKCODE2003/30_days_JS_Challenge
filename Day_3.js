// Activity 1

    // Task 1

        var a=10,b=-10,c=0;
        var num=a;
        // num=b;
        // num=c;
        if(num==0){
            console.log("Number is Zero. Number = ",num);
        }
        else if(num==Math.abs(num)){
            console.log("Number is Poitive. Number = ",num);
        }
        else{
            console.log("Number is Negative. Number = ",num);
        }

    // Task 2
        
        var age=18;
        // age=15;
        if(age>=18){
            console.log("Congratulations you are eligible for voting your age is greater than or equal to 18 i.e ",age);
        }
        else{
            console.log("Oops ! you are not eligible for voting your age is less than 18  i.e ",age);
        }

// Activity 2

    // Task 3

        var num1=41,num2=34,num3=56;
        if(num1>=num2){
            if(num1>=num3){
                console.log("Number num1 is greater i.e ",num1);
            }
            else{
                console.log("Number num3 is greater i.e ",num3);
            }
        }
        else if(num2>=num3){
            console.log("Number num2 is greater i.e ",num2);
        }
        else{
            console.log("Number num3 is greater i.e ",num3);
        }

// Activity 3

    // Task 4

        var day_number=7;

        switch (day_number) {
            case 1:
                console.log("It's a Monday. The Start of week , Have a good day.");
            break;

            case 2:
                console.log("It's a Tuesday. Ganpati Bappa Mourya , Have a good day.");
            break;

            case 3:
                console.log("It's a Wednesday. Be Happy Be Positive , Have a good day.");
            break;

            case 4:
                console.log("It's a Thursday. Good Day to start new things , Have a good day.");
            break;

            case 5:
                console.log("It's a Friday. The last working day of week , Have a good day.");
            break;

            case 6:
                console.log("It's a Saturday. Today is movie night , Have a good day.");
            break;

            case 7:
                console.log("It's a Sunday. It's holiday , Enjoy and also plan next week schedule, Have a good day.");
            break;

            default:
                console.log("Oops ! Wrong Number Enter number in Range (1-7).");
                break;
        }


    // Task 5

        var marks=99;

        switch (true) {
            case marks>=80:
                console.log("Great You Have Achieved Grade A.");
            break;

            case marks>=70 && marks<80:
                console.log("Good You Have Achieved Grade B.");
            break;

            case marks>=60 && marks<70:
                console.log("Nice You Have Achieved Grade C.");
            break;

            case marks>=50 && marks<60:
                console.log("You Have Achieved Grade D . Add some more efforts.");
            break;

            case marks>=40 && marks<50:
                console.log("You Have Achieved Grade E. Do Practice ,Practice makes man perfect.");
            break;

            case marks<40:
                console.log("You Have Achieved Grade F. Remember you can do it. Nothing is impossible think it like I'm possible.");
            break;

            default:
                console.log("Oops ! Enter your marks again.");
                break;
        }

// Activity 4

    // Task 6
        var ev_od=100
        console.log(ev_od%2==0 ? "Number is Even":"Number is odd")

// Activity 5

    // Task 7

        var leap_year=2024
        if(leap_year%400==0 || (leap_year%4==0 &&  leap_year%100!=0)){
            console.log(leap_year," is a Leap year.");
        }
        else{
            console.log(leap_year," is not a Leap year.");
        }