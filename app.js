const yargs = require('yargs')
const students = require('./code')

yargs.command({
    command:'add',
    describe:'add student',
    builder:{
        id:{
            describe:'This is title',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is name',
            demandOption:true,
            type:'string'
        },
        degrees:{
            describe:'This is degrees',
            demandOption:false,
            type:'array'
        },
        comment:{
            describe:'This is comment',
            type:'string'
        },
        total:{
            describe:'This is total',
            type:'number'
        }
        
    },
    handler:(x)=>{
        students.add_Student(x.id,x.name,x.degrees)
    }

})

yargs.command({
    command:'remove',
    describe:'remove student',
    builder:{
        id:{
            describe:'This is title',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        students.removeStudent(x.id)
    }

})

yargs.command({
    command:'read',
    describe:'read student',
    builder:{
        id:{
            describe:'This is title',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        students.readStudent(x.id)
    }

})

yargs.command({
    command:'list',
    describe:'list student',
    handler:()=>{
        students.listStudents()
    }

})

yargs.parse()