import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {
            id: 1,
            name: "Nishan Rai",
            age: 26,
            department: "ICT",
            email: "nishan@example.com",
            address: "Chitwan, Nepal",
            isActive: true
        },
        {
            id: 2,
            name: "Sita Sharma",
            age: 22,
            department: "BCA",
            email: "sita@example.com",
            address: "Kathmandu, Nepal",
            isActive: true
        },
        {
            id: 3,
            name: "Ram Thapa",
            age: 24,
            department: "CSIT",
            email: "ram@example.com",
            address: "Pokhara, Nepal",
            isActive: false
        },
        {
            id: 4,
            name: "Hari KC",
            age: 23,
            department: "BIT",
            email: "hari@example.com",
            address: "Butwal, Nepal",
            isActive: true
        },
        {
            id: 5,
            name: "Gita Rai",
            age: 21,
            department: "BIM",
            email: "gita@example.com",
            address: "Biratnagar, Nepal",
            isActive: true
        }
    ];
//GET
    getAllStudents(){
        return this.students;
    }
    getStudentById(id:number){
        const student= this.students.find((s)=>s.id ===id);
        if(!student) throw new NotFoundException('Student Not Found!');
        return student
    }

    // POST
    createStudent(data:{name: string; age:number; department: string; email: string; address: string; isActive: boolean; }){
        const newStudent = {
            id: Date.now(),
            ...data 
        };
        this.students.push(newStudent);
        return newStudent
    }

    // PUT
    updateStudent(id:number, data:{name: string; age:number; department: string; email: string; address: string; isActive: boolean; }){
        const index = this.students.findIndex((s)=> s.id === id);
        if(index === -1) throw new NotFoundException('Student not found!')
            this.students[index] = {id, ...data}
        return this.students[index]
    }

    //PATCH
    patchStudent(id:number, data: Partial<{name: string; age:number; department: string; email: string; address: string; isActive: boolean;}>){
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }
    //Delete
    deleteStudent(id: number){
        const index = this.students.findIndex((s)=> s.id === id);
        if(index === -1) throw new NotFoundException('Student Not Found!')
        const deleted = this.students.splice(index, 1)
        return { message : "Student Deleted", students: deleted[0]}
    }
}
