// const statusRef = document.querySelector('.status');

// function getSubscriptionStatus(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             resolve("VIP");
//         }, 2000);
//     });
// }

// //then function
// //getSubscriptionStatus().then(response => console.log(response));

// // async await function
// async function main(){
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status;
// }
// main();

const videoRef = document.querySelector('.video');

function getVideo(subscriptionStatus){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(subscriptionStatus == "VIP"){
                resolve("show video");
            } else if(subscriptionStatus == "FREE"){
                resolve("show trailer");
            }
            else{
                reject("no video");
            }
        }, 2000)
    });
}

async function video(){
    const status = await getVideo("ELSE");
    videoRef.innerHTML = status;
}
video();

//24:36

