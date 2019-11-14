const scrollToFormBttns = document.getElementsByClassName('scroll-to-form');

for(let scrToFormBttn of scrollToFormBttns)
  scrToFormBttn.onclick = () => {
    window.scrollBy(0, formBlock.getBoundingClientRect().y);
  }

diplomaImg.onclick = () => {
  diplomaFullPage.style.display = 'block';
  body.style['overflow'] = 'hidden';
}

diplomaFullPage.onclick = () => {
  diplomaFullPage.style.display = 'none';
  body.style['overflow'] = 'auto';
}

dodatokImg.onclick = () => {
  dodatokFullPage.setAttribute('style', 'display:block;');
  body.style['overflow'] = 'hidden';
  setTimeout(function(){
    dodatokInside.setAttribute('style', 'transform: translateX(0vw);');
    dodatokOutside.setAttribute('style', 'transform: translateX(-100vw);');
  }, 1);
}

dodatokFullPage.onclick = () => {
  dodatokFullPage.style.display = 'none';
  body.style['overflow'] = 'auto';
  dodatokInside.removeAttribute('style');
  dodatokOutside.removeAttribute('style');
}

submitBlank.onclick = () => {
  if(payTime1.checkValidity() && userTel.checkValidity() && userAddress.checkValidity()){
    submitBlank.type = 'button';
    items.innerHTML = `
        <section class="item-section" id="itemsSection">
          <p>ТУТ УСЛОВИЯ И ТОВАРЫ</p>
        </section>`;

    window.scrollBy(0, itemsSection.getBoundingClientRect().y);
  }
  else
    submitBlank.type = 'submit';

}
