const {sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
    } = require("../challenges/week9");

describe("sumMultiples  ", ()=>{
    test("it throws an error if not passed an array",()=>{
       expect(()=>{
           sumMultiples();
       }).toThrow("arr is required");

       expect(()=>{
           sumMultiples("foo");
       }).toThrow("an Array is required")

       expect(()=>{
        sumMultiples(4);
        }).toThrow("an Array is required")
    })

    
    test("it returns the sum of any numbers that are multiple of 3 or 5",()=>{
        const result = sumMultiples([1,3,5]);
        const expected = 8;
        expect(result).toBe(expected);
    });

    test("it works okay with decimal number", ()=>{
        const result = sumMultiples([1,3,5.0,2,12,10]);
        const expected = 30;
        expect(result).toBe(expected)
    });

    test("return 0 if there are no multiples of 3 or 5", ()=>{
        expect(sumMultiples([1,2,8,13,7])).toBe(0);
    })
});

describe("isValidDNA", ()=>{
    test("it throws an error if not passed an string", ()=>{
        expect(()=>{
            isValidDNA()
        }).toThrow("str is required");

        expect(()=>{
            isValidDNA(["a","A"])
        }).toThrow("str is required");

        expect(()=>{
            isValidDNA(4587)
        }).toThrow("str is required");
    });


    test("Return true if the string only contain 'C,G,A,T'", ()=>{
        expect(isValidDNA("CG")).toBe(true);
        expect(isValidDNA("CGAT")).toBe(true);
        expect(isValidDNA("CGATB")).toBe(false);
    });

    test("test if the letter are lowerCase",()=>{
        expect(isValidDNA("cgat")).toBe(true);
        expect(isValidDNA("c")).toBe(true);
        expect(isValidDNA("cgatato")).toBe(false);

    })

});

describe("ComplementaryDNA", ()=>{

    test("it throws an error if not passed an string",()=>{
        expect(()=>{
            getComplementaryDNA()
        }).toThrow("str is required")
    
        expect(()=>{
            getComplementaryDNA(["a","B",2])
        }).toThrow("str is required")

        expect(()=>{
            getComplementaryDNA(12334);
        }).toThrow("str is required")
    });

    test("Return de complementary DNA", ()=>{
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });

    test("test if the letter are lowerCase",()=>{
        expect(getComplementaryDNA("actg")).toBe("TGAC")
    });

    
});

describe("Is it prime a Number ",()=>{

    test("it throws an error if not passed a Number",()=>{
        expect(()=>{
            isItPrime()
        }).toThrow("Number is required")

        expect(()=>{
            isItPrime([1,2,3])
        }).toThrow("Number is required")

        expect(()=>{
            isItPrime("10")
        }).toThrow("Number is required")
    })
    
    
    test("Return true if is a Prime Number",()=>{
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(8)).toBe(false);
        expect(isItPrime(21.0)).toBe(true);
        expect(isItPrime(1000)).toBe(false);
        
    })
})


describe("Create a Matrix",()=>{

    test("it throws an error if the first argument is not a number and the second is empty",()=>{
        expect(()=>{
            createMatrix();
        }).toThrow('n is required');

        expect(()=>{
            createMatrix([1],"foo")
        }).toThrow("the first argument is not a number")

        expect(()=>{
            createMatrix(2);
        }).toThrow('fill is required');
    });


    test("It returns a matrix of n*n when passed n",()=>{
        expect(createMatrix(2,"foo")).toEqual([['foo','foo'], ['foo','foo']]);
        expect(createMatrix(1,"foo")).toEqual([['foo']]);
        expect(createMatrix(3,"foo")).toEqual([['foo','foo','foo'], ['foo','foo','foo'],['foo','foo','foo']]);
    })

});


describe("Are we covered",()=>{
   

    expect(()=>{
        areWeCovered('gary', 'Friday');
    }).toThrow('The first argument is not an Array');

    
    expect(()=>{
        areWeCovered(['gary'], 5);
    }).toThrow('The second argument is not a String');
    
    test("it returns false if there are no staff at all",()=>{
        expect(areWeCovered([], "Sunday")).toBe(false);
        expect(areWeCovered([], "Monday")).toBe(false);
        expect(areWeCovered([], "Tuesday")).toBe(false);
        expect(areWeCovered([], "Wednesday")).toBe(false);
        expect(areWeCovered([], "Thursday")).toBe(false);
        expect(areWeCovered([], "Friday")).toBe(false);
        expect(areWeCovered([], "Saturday")).toBe(false);
    });

    test("returns false if there are staff less than 3 are not scheduled to work",()=>{
        const staff =[
            {name:"gary", rota:["Monday","Tuesday"]},
            {name:"paul", rota:["Saturday","Tuesday"]},
            {name:"sally", rota:["Monday","Tuesday"]},
            {name:"jess", rota:["Monday","Tuesday","Friday"]},
            {name:"paul", rota:["Monday","Tuesday","Wednesday","Sunday"]},
            {name:"paul", rota:["Saturday","Sunday","Friday"]},
            {name:"sally", rota:["Friday","Saturday"]}
        ];
        expect(areWeCovered(staff,"Sunday")).toBe(false);
        expect(areWeCovered(staff,"Monday")).toBe(true);
        expect(areWeCovered(staff,"Tuesday")).toBe(true);
        expect(areWeCovered(staff,"Wednesday")).toBe(false);
        expect(areWeCovered(staff,"Thursday")).toBe(false);
        expect(areWeCovered(staff,"Friday")).toBe(true);
        expect(areWeCovered(staff,"Saturday")).toBe(true);
    });
})