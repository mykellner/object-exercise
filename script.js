// skolor

let medieinst = {
    name: "Medieinstitutet",
    address: "Drottninggatan 20",
    zipcode: "21213",
    city: "Malmö",
    students: [],
    teachers: [],
    addStudentToSchool: function (student){
        this.students.push(student);
        student.school = this;
        return this;
    },
    addTeacherToSchool: function (teacher){
        this.teachers.push(teacher);
        teacher.school = this;
        return this;
    },
    relegateStudent: function (student) {
        student.school = {};
        this.students = this.students.filter ((s) => {
            return s !== student;
        });
    },
    fireTeacher: function (teacher) {
        teacher.school = {};
        this.teachers = this.teachers.filter ((t) => {
            return t !== teacher;
        });
    }
}

// ämnen

let matematik = {
    name: "Matematik",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher = teacher;
        teacher.subjects.push(this);
        return this;
    },
    addStudentToCourse: function (student){
        this.students.push(student);
        student.subjects.push(this);
        return this;
    },
    removeTeacher: function (teacher) {
        this.teacher = {};
        teacher.subjects = teacher.subjects.filter ((s) => {
            return s !== this;
        });
    }
}

let webbproduktion = {
    name: "Webbproduktion",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher = teacher;
        teacher.subjects.push(this);
        return this;
    },
    addStudentToCourse: function (student){
        this.students.push(student);
        student.subjects.push(this);
        return this;
    },
    removeTeacher: function (teacher) {
        this.teacher = {};
        teacher.subjects = teacher.subjects.filter ((s) => {
            return s !== this;
        });
    }
}

let javascript = {
    name: "javascript",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher = teacher;
        teacher.subjects.push(this);
        return this;
    },
    addStudentToCourse: function (student){
        this.students.push(student);
        student.subjects.push(this);
        return this;
    },
    removeTeacher: function (teacher) {
        this.teacher = {};
        teacher.subjects = teacher.subjects.filter ((s) => {
            return s !== this;
        });
    }
}

// Studenter

let my = {
    name: "My",
    school: {},
    age: 26,
    gender: "female",
    subjects: [],
    enlistToSubject: function (subject){
        this.subjects.push(subject);
        subject.students.push(this);
        return this;
    },
    quitSubject: function (subject) {
        this.subjects = this.subjects.filter ((s) => {
            return s !== subject;
        });
        subject.students = subject.students.filter ((s) => {
            return s !== this;
        });

    }
}

let anton = {
    name: "Anton",
    school: {},
    age: 25,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject){
        this.subjects.push(subject);
        subject.students.push(this);
        return this;
    },
    quitSubject: function (subject) {
        this.subjects = this.subjects.filter ((s) => {
            return s !== subject;
        });
    }
}

let lina = {
    name: "Lina",
    school: {},
    age: 29,
    gender: "female",
    subjects: [],
    enlistToSubject: function (subject){
        this.subjects.push(subject);
        subject.students.push(this);
        return this;
    },
    quitSubject: function (subject) {
        this.subjects = this.subjects.filter ((s) => {
            return s !== subject;
        });
    }
}

let august = {
    name: "August",
    school: {},
    age: 22,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject){
        this.subjects.push(subject);
        subject.students.push(this);
        return this;
    },
    quitSubject: function (subject) {
        this.subjects = this.subjects.filter ((s) => {
            return s !== subject;
        });
    }
}

let harley = {
    name: "Harley",
    school: {},
    age: 24,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject){
        this.subjects.push(subject);
        subject.students.push(this);
        return this;
    },
    quitSubject: function (subject) {
        this.subjects = this.subjects.filter ((s) => {
            return s !== subject;
        });
    }
}

// Lärare

let niklas = {
    name: "Niklas",
    school: {},
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject)
        subject.teacher = this;
        return this
    }
    
}

let fredrik = {
    name: "Fredrik",
    school: {},
    subjects: [],
    addSubject: function (subject){
        this.subjects.push(subject)
        subject.teacher = this;
        return this
    }
}

// --------


let arrayOfSubjects = [];
let arrayOfStudentEnlistedToCouse = [];

function addSubjectToTeacher (subject, teacher){
    teacher.subjects.push(subject);
    subject.teacher = teacher;
    return teacher;
}


function displayAllStudents () {
        for(student in medieinst.students){
            console.log(medieinst.students[student]);
        }
 }

function displayAllTeachers () {
    for(teacher in medieinst.teachers){
        console.log(medieinst.teachers[teacher]);
    }
}


 function displayAllSubjectsOfStudent(student) {

    let thisArrayOfSubjects = [];

    for(subject in student.subjects){
        let course = student.subjects[subject];
        thisArrayOfSubjects.push(course);
    }
    
    arrayOfSubjects = thisArrayOfSubjects;
    return arrayOfSubjects;

 }

 function displayAllStudentsEnlistedToSubject(subject){

    let thisArrayOfStudentEnlistedToCouse = [];

     for(student in subject.students){
         let thisStudent = subject.students[student];
         thisArrayOfStudentEnlistedToCouse.push(thisStudent)
     }

     arrayOfStudentEnlistedToCouse = thisArrayOfStudentEnlistedToCouse;
     return arrayOfStudentEnlistedToCouse;
 }


// ----------

medieinst.addStudentToSchool(my);
medieinst.addStudentToSchool(lina);
medieinst.addStudentToSchool(anton);
medieinst.addStudentToSchool(harley);
medieinst.addStudentToSchool(august);

medieinst.addTeacherToSchool(niklas);
medieinst.addTeacherToSchool(fredrik);

niklas.addSubject(javascript);
niklas.addSubject(matematik);
fredrik.addSubject(webbproduktion);

my.enlistToSubject(javascript);
my.enlistToSubject(matematik);

lina.enlistToSubject(webbproduktion);
lina.enlistToSubject(matematik);

harley.enlistToSubject(matematik);

august.enlistToSubject(javascript);

anton.enlistToSubject(webbproduktion);






