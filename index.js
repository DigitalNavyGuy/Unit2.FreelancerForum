const freelancerContainer = document.querySelector('#freelancer-container');

const freelancers = [
    { name: "Dr. Slice", price: '$25', occupation: "gardener" },
    { name: "Dr. Pressure", price: '$51', occupation: "programmer" },
    { name: "Prof. Possibility", price: '$43', occupation: "teacher" },
    { name: "Prof. Prism", price: '$81', occupation: "teacher" },
    { name: "Dr. Impulse", price: '$43', occupation: "teacher" },
    { name: "Prof. Spark", price: '$76', occupation: "programmer" },
    { name: "Dr. Wire", price: '$47', occupation: "teacher" },
    { name: "Prof. Goose", price: '$72', occupation: "driver" },
  ];

// function createHeader(){
//     const header = document.createElement('div');
//     header.textContent = 'Freelancer Forum';
// }

function createList(freelancer){
    const provider = document.createElement('div');
    provider.classList.add('info');

    const providerName = document.createElement('span');
    providerName.textContent = freelancer.name;
    const providerPrice = document.createElement('span');
    providerPrice.textContent = freelancer.price;
    const providerJob = document.createElement('span');
    providerJob.textContent = freelancer.occupation;

    provider.append(providerName, providerJob, providerPrice);

    return provider;
}

function createProviders(allProviders){
    let workers = [];

    for (let i = 0; i < allProviders.length; ++i){
        const currentWorker = allProviders[i];

        workers.push(createList(currentWorker));
    }

    return workers;
}

freelancerContainer.append(...createProviders(freelancers));
