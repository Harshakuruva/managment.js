const rdline=require("readline-sync");

let employee = [{

    name: "harsha", desig: "abc", salary: "xx", empid: 1

},

{

    name: "sri", designation: "bcd", salary: "xx", empid: 2

},

{

    name: "kuruba", designation: "cde", salary: "YY", empid: 3

},

{

    name: "mahesh", designation: "def", salary: "VcYY", empid: 4

}]

function employeesystem() {

    let funoj = {

        1:function display() {

            console.log(emp);

        },

        2:function add() {

            let emp1 = emp.push({ name: "hi", designation: "ascdwc", salary: "bdhc", empid: 5 });

            console.log(emp);

        },

        3:function remove() {

            console.log("hi");

            console.log(emp.splice(1,1));

            console.log(emp);

        },

        4:function search() {

            let emp1 = {name:"hello"};

            function check(emp1) 
            {

              return emp1==;

              }

            console.log(emp);

        }

    }

    function chooseoption(a) {

        console.log("1-display employee details");

        console.log("2-add employee details");

        console.log("3-remove employee details");

        console.log("4-search employee");

        console.log("-1-exit");

        console.log();

    }

    function Erroroption(a) {

        if (a > 4 || a == 0 || a < 0) {

            console.log("Wrong input");

            console.log();

            return false;

        }

        return true;

    }

    function init() {

        let a;

        while (true) {

            chooseoption();

 

            a = readline.question("choose the option");

            if (Erroroption(a)) {

                    funoj[a]();

            }

            if (a == -1)

            {

                console.log("Thanks you");

                break;

            }

        }

    }

    init();

}

employeesystem();