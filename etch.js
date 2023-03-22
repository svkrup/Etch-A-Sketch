const master=document.querySelector('#master');

for (let i=0;i<256;i++) {
    const div=document.createElement('div');
    div.setAttribute('id',i);
    master.appendChild(div);
};


