
const minhaPromise = 
() => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
});


// minhaPromise().then(response => {
//     console.log(response);
// })
// .catch(error => {

// });

async function executaPromise1() {
    const response = await minhaPromise();

    console.log(response);    
};


async function executaPromise2 () {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};


const executaPromise3 = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

}

//executaPromise1();
//executaPromise2();
executaPromise3();