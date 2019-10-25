var i = 0 , slide1, slide2, slide3, slide4 , info;

slide1 = document.querySelector('#img1');
slide2 = document.querySelector('#img2');
slide3 = document.querySelector('#img3');
slide4 = document.querySelector('#img4');
info = document.querySelector('.info');
    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 37) {
            right();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 39 ) {
            right();
        }
    });
                  function right() {
                                        if(i === 0){
                                          slide1.style.opacity = 1;
                                          slide2.style.opacity = 0;
                                          slide3.style.opacity = 0;
                                          slide4.style.opacity = 0;
                                          info.textContent = 'slide one';
                                        i++;
                                        }

                                        else if(i === 1){
                                          slide1.style.opacity = 0;
                                          slide2.style.opacity = 1;
                                          slide3.style.opacity = 0;
                                          slide4.style.opacity = 0;
                                          info.textContent = 'slide two';

                                        i++;
                                        }
                                        else if(i === 2){
                                          slide1.style.opacity = 0;
                                          slide2.style.opacity = 0;
                                          slide3.style.opacity = 1;
                                          slide4.style.opacity = 0;
                                          info.textContent = 'slide three';

                                        i++;
                                        }

                                        else if(i === 3){
                                          slide1.style.opacity = 0;
                                          slide2.style.opacity = 0;
                                          slide3.style.opacity = 0;
                                          slide4.style.opacity = 1;
                                          info.textContent = 'slide four';

                                        i = 0;
                                        }
                      }


    function left(){
                  if(i===0){
                    slide1.style.opacity = 0;
                    slide2.style.opacity = 0;
                    slide3.style.opacity = 0;
                    slide4.style.opacity = 1;
                    info.textContent = 'slide four';

                    i++;
                  }
                  else if(i === 1){
                    slide1.style.opacity = 0;
                    slide2.style.opacity = 0;
                    slide3.style.opacity = 1;
                    info.textContent = 'slide three';
                    slide4.style.opacity = 0;
                    i++;
                  }
                  else if(i===2){
                    slide1.style.opacity = 0;
                    slide2.style.opacity = 1;
                    slide3.style.opacity = 0;
                    slide4.style.opacity = 0;
                    info.textContent = 'slide two';

                    i++;
                  }
                  else if(i===3){
                    slide1.style.opacity = 1;
                    slide2.style.opacity = 0;
                    slide3.style.opacity = 0;
                    slide4.style.opacity = 0;
                    info.textContent = 'slide one';

                    i = 0;
                  }
                }
