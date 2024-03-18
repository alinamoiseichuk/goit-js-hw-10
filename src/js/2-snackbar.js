import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const delay = event.currentTarget.elements.delay.value;
    const radio = event.currentTarget.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (radio === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            console.log(`✅ Fulfilled promise in ${delay} ms`)
            iziToast.show({
                color: 'green',
                position: 'topRight',
                message: `✅ Fulfilled promise in ${delay} ms`,
                messageColor: 'white',
            });
        })
        .catch(delay => {
            console.log(`❌ Rejected promise in ${delay} ms`)
            iziToast.show({
                color: 'red',
                position: 'topRight',
                message: `❌ Rejected promise in ${delay} ms`,
                messageColor: 'white',
            });
    })
});