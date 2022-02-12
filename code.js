const fs =require('fs')
const add_Student =(id,name,degrees)=>{
    const students = loadStudents()
        const sameduplicate = students.filter((all)=>{
            return all.id === id
        })
        if(sameduplicate.length==0){
             total = 0
        degrees.forEach((all)=>{
            total+=all
        })
        students.push({
            id,name,degrees,total
        })
        saveStudents(students)
        console.log('successfully')
        }

        else{
            console.log('error same duplicate ')
        }
    }
    
    const loadStudents =()=>{
        try{
            const data = fs.readFileSync('grade.json').toString()
            return JSON.parse(data)
        }
        catch(e) {
            return[]
        }
    }
    
    const saveStudents =(students)=>{
        const saveStudents =JSON.stringify(students)
        fs.writeFileSync('grade.json',saveStudents)
    }
    

    const removeStudent = (id)=> {
        const students = loadStudents()
        const StudentsToKeep = students.filter((el)=>{
            return el.id !== id
        })
        console.log(StudentsToKeep)
            saveStudents(StudentsToKeep)
            console.log('Remove successfully')
        
    }

    const readStudent =(id)=>{
        const students = loadStudents()
        const studentToRead = students.find((el)=>{
            return el.id === id
        })
        console.log(studentToRead)
        if (studentToRead){
            console.log(studentToRead.name + studentToRead.degrees)
        }
        else{
            console.log('not found')
        }
    
    }
    
    
    const listStudents = ()=>{
        const students =loadStudents()
        students.forEach(element => {
            console.log(element.id + element.name + element.degrees)
            console.log(typeof(element.degrees))
        })
    }
    
    
    
module.exports={
    add_Student,removeStudent,readStudent,listStudents
}