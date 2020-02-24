let _id = Symbol('id');

class Employee {

    static employees = [];
    constructor(id, firstName, lastName, birthday, salary, position, department) {
        this[_id] = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.salary = salary;
        this.position = position;
        this.department = department;
        Employee.employees.push(this);
    }

    static get EMPLOYEES() {
        return Employee.employees;
    }


    get age() {
        let today = new Date();
        let birthDayMonthYear = this.birthday.split('/');
        let birthday = new Date(birthDayMonthYear[2], birthDayMonthYear[1] - 1, birthDayMonthYear[0]);
        let between = today.getFullYear() - birthday.getFullYear();

        if (!(today.getMonth() >= birthday.getMonth() && today.getDate() >= birthday.getDate())) {
            between--;
        }

        return between;
    }

    set age(param) {
        throw new Error('You can`t change age');
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(param) {
        throw new Error('This property is readonly');
    }

    quit() {
        let employees = Employee.employees.filter(empl => empl[_id] !== this[_id]);
        Employee.employees = employees;
    }
    retire() {
        console.log('It was such a pleasure to work with you!');
        this.quit();
    }
    getFired() {
        console.log('Not a big deal!');
        this.quit();
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }
    
    getPromoted(benefits){
        if(benefits.salary){
            this.changeSalary(benefits.salary);
        }
        if(benefits.position){
            this.changePosition(benefits.position);
        }
        if(benefits.department){
            this.changeDepartment(benefits.department);
        }
    }
}


