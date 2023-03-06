class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;

        this.setFullname = function(fullname) {
            this.fullname = fullname;
        }
        this.getFullname = function () {
            return this.fullname;
        }
        this.setEmail = function(email) {
            this.email = email;
        }
        this.getEmail = function () {
            return this.email;
        }        
        }
    }
    infonation = Staff.toString();


let david = new Staff("David", "david@gmail.com")
    david.setFullname("David Do");
    david.setEmail("david.do@gmail.com");
   let David =  david.toString();

let Staffs = [
    new Staff ("David Do", "david.do@gmail.com"),
    new Staff ("jack", "jack@gmail.com"),
    new Staff ("henry", "henry@gmail.com")
]

for(let i = 0;i<Staff.length;i++){
       Staffs[i].toString(); 
}