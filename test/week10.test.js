const{
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/week10")

describe("Sum of the Digits", ()=>{

    test("it throws an error if not passed a number ", ()=>{
        expect(()=>{
            sumDigits();
        }).toThrow("Number is required");

        expect(()=>{
            sumDigits('458')
        }).toThrow("Number is required");

        expect(()=>{
            sumDigits([1,2,3,])
        }).toThrow("Number is required")
    })


    test("takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 ",()=>{
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(2891)).toBe(20);
    })

});

describe("Create a range of a number as an array",()=>{
    
    test("It throws an error if not passed a number as a argument",()=>{
        expect(()=>{
            createRange();
        }).toThrow('start is required');

        expect(()=>{
            createRange(5);
        }).toThrow('end is required');

        expect(()=>{
            createRange(1,"a")
        }).toThrow("the arguments are not a number")

        expect(()=>{
            createRange([1],1)
        }).toThrow("the arguments are not a number")

        expect(()=>{
            createRange(1,2,[1])
        }).toThrow("the step have to be a number")

        expect(()=>{
            createRange(8, 5, 2)
        }).toThrow("End have to be higher than Start")
    });
    
        
    test("given a start, an end and step numbers create a range of numbers as an array",()=>{
        expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(2,6)).toEqual([2,3,4,5,6]);
    })

});

describe("The function return an array of usernames of users who have used more than 100 minutes of screentime", ()=>{
    test("It throws an error if not passed te correct argument",()=>{
        expect(()=>{
            getScreentimeAlertList();
        }).toThrow("users is required")

        expect(()=>{
            getScreentimeAlertList(['jhon']);
        }).toThrow('date is required');

        expect(()=>{
            getScreentimeAlertList("jhon", '2019-05-04');
        }).toThrow('incorrect arguments, pass an array and a string');

        expect(()=>{
            getScreentimeAlertList(['jhon'], 20190504);
        }).toThrow('incorrect arguments, pass an array and a string');
        
        expect(()=>{
            getScreentimeAlertList('jhon', '2019-05-04');
        }).toThrow('incorrect arguments, pass an array and a string');

    });


    test("The function return an array of usernames of users who have used more than 100 minutes of screentime",()=>{

            const user =  [
              
                {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                             { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                             { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                             { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                             { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                             { date: "2019-06-01", usage: { twitter: 100, instagram: 56, facebook: 61} },
                            ]
               },
               {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                             { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                             { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                             { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                             { date: "2019-06-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 101} },
                            ]
               },
                ]

        expect(getScreentimeAlertList(user, '2019-05-04')).toEqual(["beth_1234"]); 
        expect(getScreentimeAlertList(user, '2019-06-13')).toEqual([]);
        expect(getScreentimeAlertList(user, '2019-06-01')).toEqual(["beth_1234","sam_j_1989"]);

    });

});


describe("This function should transform the hex code into an RGB code in the format", ()=>{

    test("It throws an error if not passed an argument", ()=>{
        expect(()=>{
            hexToRGB();
        }).toThrow("hexStr is required")
    
        expect(()=>{
            hexToRGB(1233455);
        }).toThrow("hexStr have to be a string")

        expect(()=>{
            hexToRGB('#fffffffff');
        }).toThrow("Incorrect hexadecimal format")

        expect(()=>{
            hexToRGB('#12335fffx');
        }).toThrow("Incorrect hexadecimal format")

        expect(()=>{
            hexToRGB('#111');
        }).toThrow("Incorrect hexadecimal format")

    });

    test("Transform the hexadecimal code into RGB code ", ()=>{

        expect(hexToRGB('#FF1133')).toEqual('rgb(255,17,51)')
        expect(hexToRGB('#AB2345')).toEqual('rgb(171,35,69)')
    });

});

describe("This function takes a noughts and crosses board represented as an array, where an empty space is represented with null",()=>{
    
    test("It throws an error if not passed an argument",()=>{
        expect(()=>{
            findWinner()
        }).toThrow("board is required")
        expect(()=>{
            findWinner("'x','0',null")
        }).toThrow("incorrect argument, pass an array")

    })

    test("This function takes a noughts and crosses board represented as an array, where an empty space is represented with null",()=>{

        const board = [
              ["X", "0", null],
              ["X", null, "0"],
              ["X", null, "0"]
             ]

        const board1= [
            [null, "X", "0"],
            ["X", null, "0"],
            ["X", null, "0"] 
        ]

        const board2 =[
            [null, "0", "X"],
            ["0", "X", null],
            ["X", null, "0"] 
        ]
        
        const board3 = [
            ["X", "0", "0"],
            ["0", "0", "X"],
            ["X", "X", "0"]
        ]

        expect(findWinner(board)).toEqual("X");
        expect(findWinner(board1)).toEqual("0");
        expect(findWinner(board2)).toEqual("X");
        expect(findWinner(board3)).toEqual(null);
        
    });
})