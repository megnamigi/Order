let message = document.getElementById("title");

function order(dessertName) {
// Мессеж харуулах <p> элементийг id-аар нь олж авна
const messageElement = document.getElementById("message");

// Элементийн доторх текстийг өөрчилнө
if (dessertName === 'Чихэр') {
messageElement.innerText = "🍬 Таны чихэрний захиалгыг хүлээн авлаа!";
} else if (dessertName === 'Бялуу') {
messageElement.innerText = "🎂 Таны бялууны захиалгыг хүлээн авлаа!";
} else if (dessertName === 'Зайрмаг') {
messageElement.innerText = "🍦 Таны зайрмагны захиалгыг хүлээн авлаа!";
}
}