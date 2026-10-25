
const fs = require('fs')

//add data
const addperson = (fname, lname, id, age, city) => {
    const alldata = loadData()
    
    const duplicateddata = alldata.filter((x) => { return x.id == id })
    if (duplicateddata.length === 0) {
        alldata.push({
            fname: fname,
            lname: lname,
            id: id,
            age: age,
            city:city
            
        })
        savedata(alldata)
    }
    else {
        console.log("id is already found")
    }
 


}

//delete specific person
const deleteperson = (id) => {
    const alldata = loadData()
    const deleteitem = alldata.filter((x) => {
        
        return x.id != id
    })
    savedata(deleteitem)
}

//view all data
const readData = () => {
    const alldata = loadData()
    console.log(alldata)
}

//view specific data
const readDataOfSpecificPerson = (id) => {
    const alldata = loadData()
    const itemneeded = alldata.find((x) => { return x.id == id })
    if (itemneeded) {
        console.log(itemneeded)
    }
    else {
        console.log("item with this id is not found")
    }
    
}

//view fname,lname,city
const viewspecificdata = () => {
    const alldata = loadData()
    alldata.forEach((x) => { console.log("full name :", x.fname + " " + x.lname , ",city: " , x.city) })
}

//delete all data
const deleteall = () => {
    savedata([])
}





const loadData = () => {
    try {
        const alldata = fs.readFileSync("data10.json").toString()
        const dataObj = JSON.parse(alldata)
        return dataObj
    }
    catch {
        return []
    }
}

const savedata = (data) => {
    const datajson = JSON.stringify(data)
    fs.writeFileSync("./data10.json", datajson)

}

module.exports = {
    addperson,
    deleteperson,
    readData,
    readDataOfSpecificPerson,
    viewspecificdata,
    deleteall

}