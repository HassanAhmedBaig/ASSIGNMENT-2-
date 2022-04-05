let std = [
    {
        name: 'hassan',
        class: '1',
        age: 7,
        cnic: "42101-80566579"
    },
    {
        name: 'salman',
        class: '1',
        age: 7,
        cnic: "42101-80566579"
    },
    {
        name: 'ali',
        class: '6',
        age: 12,
        cnic: "42101-80566579"
    },
    {
        name: 'waqas',
        class: '4',
        age: 10,
        cnic: "42101-80566579"
    },
    {
        name: 'ali',
        class: '1',
        age: 7,
        cnic: "42101-80566579"
    },
    {
        name: 'hassan',
        class: '2',
        age: 6,
        cnic: "42101-80566579"
    },
    {
        name: 'zurnair',
        class: '1',
        age: 6,
        cnic: "42101-80566579"
    },
    {
        name: 'aqib',
        class: '1',
        age: 6,
        cnic: "42101-80566579"
    },
    {
        name: 'ali',
        class: '4',
        age: 10,
        cnic: "42101-80566579"
    },

    {
        name: 'zurnair',
        class: '5',
        age: 10,
        cnic: "42101-80566579"
    }
]

function searched() {
    let searchQuery = document.getElementById("search")
    let val = document.getElementById("searched")
    document.getElementById('ans').innerHTML = ""

    document.getElementById('ans1').innerHTML = `<h1>Bio Data of Selected Students <h1>`
    let count = 0
    for (var i = 0; i < std.length; i++) {
        if (std[i].name == searchQuery.value.toLowerCase() && val.selectedIndex === 0) {
            count++
            document.getElementById('ans').innerHTML += `<table class="center">
            <tr>
            <th >Name</th>
            <th >Class</th>
            <th >Age</th>
            <th colspan=2>CNIC</th>
        </tr>
            <tbody>
            <tr>
            <td >${std[i].name}</td>
            <td >${std[i].class}</td>
            <td >${std[i].age}</td>
            <td >${std[i].cnic}</td>
        </tr>
    </tbody>
    </table>`


            console.log(std[i])

        }
        if (std[i].class == val.selectedIndex && searchQuery.value.length == 0) {
            count++;
            document.getElementById('ans').innerHTML += `<table class="center">
            <tr>
            <th >Name</th>
            <th >Class</th>
            <th >Age</th>
            <th colspan=2>CNIC</th>
        </tr>
            <tbody>
            <tr>
            <td >${std[i].name}</td>
            <td >${std[i].class}</td>
            <td >${std[i].age}</td>
            <td >${std[i].cnic}</td>
        </tr>
    </tbody>
    </table>`


            console.log(std[i])

        }
        if (std[i].name == searchQuery.value.toLowerCase() && std[i].class == val.selectedIndex) {
            count++;
            document.getElementById('ans').innerHTML += `<table class="center">
            <tr>
            <th >Name</th>
            <th >Class</th>
            <th >Age</th>
            <th colspan=2>CNIC</th>
        </tr>
            <tbody>
            <tr>
            <td >${std[i].name}</td>
            <td >${std[i].class}</td>
            <td >${std[i].age}</td>
            <td >${std[i].cnic}</td>
        </tr>
    </tbody>
    </table>`
    
            console.log(std[i])
        }
        else if (count === 0 && i + 1 === std.length) {
            document.getElementById('ans').innerHTML = `<h2> No Data Found </h2>`
        }
    }
}