$(document).ready(function () {

    let allCard = document.querySelectorAll('.inCategory__add');
    console.log('Salida de allCard', allCard);

    allCard.forEach( element => {

        let plusIcon = element.querySelector('.bi-plus-lg');
        
        plusIcon.addEventListener('click', (e) => {

            e.preventDefault();

            element.classList.add('addProduct');

            setTimeout(() => {
                element.classList.add('bg-black');
            }, 600);
       

            element.querySelectorAll('.d-none').forEach(child => {
                child.classList.remove('d-none');
            });
            console.log('Salida de element-->', element)
            setTimeout(() => {
                element.querySelector('.bi-trash').classList.add('d-none');
                plusIcon.classList.add('d-none');
                element.classList.remove('addProduct');
            }, 500 );

        });


    });
    
});