const state ={
    averagePrice: 50,
    freelancers: [
        {
            name: 'Alice',
            occupation: 'Writer',
            price: 30,
        },
        {
            name: 'Bob',
            occupation: 'Teacher',
            price: 50,
        },
        {
            name: 'Carol',
            occupation: 'Programmer',
            price: 70,
        },
    ]
}


function updateAveragePrice(){
    let total = 0;

    for (let i = 0; i < state.freelancers.length; ++i){
        const currentFreelancer = state.freelancers[i];

        total += currentFreelancer.price;
    }

    state.averagePrice = Math.round(total / state.freelancers.length);
}



function addFreelancerRow(freelancer){
    state.freelancers.push(freelancer);
}



function createFreelancerTableRow(freelancer){
    const tr = document.createElement('tr');

    const nameData = document.createElement('td');
    const occupationData = document.createElement('td');
    const priceData = document.createElement('td');

    nameData.textContent = freelancer.name;
    occupationData.textContent = freelancer.occupation;
    priceData.textContent = freelancer.price;

    tr.append(nameData, occupationData, priceData);

    return tr;
}

function createTableHeaders(){
    const tr = document.createElement('tr');

    const nameData = document.createElement('th');
    const occupationData = document.createElement('th');
    const priceData = document.createElement('th');

    nameData.textContent = 'Name';
    occupationData.textContent = 'Occupation';
    priceData.textContent = 'Starting Price';

    tr.append(nameData, occupationData, priceData);

    return tr;
}

function clearTable(){
    const table = document.getElementById('freelancer-table');

    while (table.childNodes.length){
        table.removeChild(table.childNodes[0]);
    }
}



function render(){
    clearTable();

    const table = document.getElementById('freelancer-table');

    table.appendChild(createTableHeaders());

    for (let i =0; i < state.freelancers.length; ++i){

        const currentFreelancer = state.freelancers[i];

        const row = createFreelancerTableRow(currentFreelancer);

        table.appendChild(row);
    }

    updateAveragePrice();

    const priceText = document.getElementById('average-price');

    priceText.textContent = `The average starting price is $${state.averagePrice}.`;
}

render();

const randomNames = [
    {
        name: 'Eduardo',
        occupation: 'Landscaper',
        price: 70,
    },
    {
        name: 'Tim',
        occupation: 'Electrician',
        price: 65,
    },
    {
        name: 'Adam',
        occupation: 'Pool Maintenance',
        price: 50,
    },
    {
        name: 'Joe',
        occupation: 'Woodwork',
        price: 80,
    },
    {
        name: 'Amanda',
        occupation: 'Hair Dresser',
        price: 65,
    },
    {
        name: 'Kim',
        occupation: 'Photography',
        price: 45,
    },
    {
        name: 'Janelle',
        occupation: 'Baker',
        price: 75,
    },
    {
        name: 'Mary',
        occupation: 'Developer',
        price: 125,
    },
  ];

  function createRandomFreelancer(){
    const freelancer = randomNames[Math.floor(Math.random() * randomNames.length)];

    let count = 0;
    for (let count = 0; count <= 100; count++);

    return freelancer;
  }

  setInterval(function(){
    const newFreelancer = createRandomFreelancer();
    addFreelancerRow(newFreelancer);

    render();
  }, 500);