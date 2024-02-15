
const flags = document.querySelector('.check');

flags.addEventListener('click', languaje);

function languaje(){
    const id = flags.checked;
    if (id) {
        location.href = '/in/index.html'
    }else{
        location.href = '/index.html'
    }
}

export default languaje