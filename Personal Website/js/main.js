const readMoreBtn1 = document.querySelector('.read-more-button-1');
const text1 = document.querySelector('.read-more-1');

const readMoreBtn2 = document.querySelector('.read-more-button-2');
const text2 = document.querySelector('.read-more-2');

const readMoreBtn3 = document.querySelector('.read-more-button-3');
const text3 = document.querySelector('.read-more-3');


readMoreBtn1.addEventListener('click',(e)=>{
    text1.classList.toggle('read-more-1');
	if(readMoreBtn1.innerText == 'Read more'){
		readMoreBtn1.innerText = 'Read less';
	}
	else{
		readMoreBtn1.innerText = 'Read more';
	}
})
   
   
readMoreBtn2.addEventListener('click',(e)=>{
    text2.classList.toggle('read-more-2');
	if(readMoreBtn2.innerText == 'Read more'){
		readMoreBtn2.innerText = 'Read less';
	}
	else{
		readMoreBtn2.innerText = 'Read more';
	}
}) 


readMoreBtn3.addEventListener('click',(e)=>{
    text3.classList.toggle('read-more-3');
	if(readMoreBtn3.innerText == 'Read more'){
		readMoreBtn3.innerText = 'Read less';
	}
	else{
		readMoreBtn3.innerText = 'Read more';
	}
})   