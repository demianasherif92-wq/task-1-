
const yargs = require('yargs')
const data10 = require('./data10.js')


//TO ADD DATA
yargs.command({
    command: "add",
    describe: "items to be added",
    builder: {
        fname: {
            describe: "first name",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "last name",
            demandOption: true,
            type: "string"

        },
        id: {
            describe: "id",
            demandOption: true,
            type: "number"

        },
        age: {
            describe: "age",
            demandOption: true,
            type: "number"

        },
        city: {
            describe: "city",
            demandOption: true,
            type: "string"

        }
    },
        handler: (x) => {
            data10.addperson(x.fname,x.lname, x.id, x.age , x.city)

        }
})

//TO VIEW ALL DATA 
yargs.command({
    command: "view-all",
    describe: "view all data",
    handler: () => {
        data10.readData()
    }
})

//TO VIEW DATA OF SPECIFIC PERSON 
yargs.command({
    command: "view-one",
    describe: "to view data of specific person",
    builder: {
        id: {
            describe: "id to be deleted",
            demandOption: "true",
            type: "number"
        }

    },
    handler: (x) => {
        data10.readDataOfSpecificPerson(x.id)
    }

})

//DELETE ALL DATA
yargs.command({
    command: "delete-all",
    describe: "to delete all data",

    handler: () => {
        data10.deleteall()
    }

})

//TO DELETE SPECIFIC PERSON
yargs.command({
    command: "delete",
        describe: "item to be deleted",
    builder: {
        id: {
            describe: "id to be deleted",
                demandOption: "true",
                    type: "number"
        }
    },
    handler: (x) => {
        data10.deleteperson(x.id)
    }
})



//TO VIEW FIRST NAME, LAST NAME, CITY OF ALL DATA
yargs.command({
    command: "view-some",
    describe: "to view data of specific person",

    handler: () => {
        data10.viewspecificdata()
    }

})

yargs.parse()