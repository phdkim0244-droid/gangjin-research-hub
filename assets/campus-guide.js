const mapDialog=document.querySelector('#map-dialog');
const mapImage=document.querySelector('#map-image');
const viewport=document.querySelector('.map-viewport');
let opener=null,zoom=100;
function setZoom(value){zoom=Math.max(100,Math.min(300,value));mapImage.style.width=zoom+'%';document.querySelector('#zoom-level').textContent=zoom+'%';document.querySelector('#zoom-out').disabled=zoom===100;document.querySelector('#zoom-in').disabled=zoom===300;}
document.querySelectorAll('[data-map]').forEach(button=>button.addEventListener('click',()=>{opener=button;document.querySelector('#map-title').textContent=button.dataset.title;mapImage.src=button.dataset.map;mapImage.alt=button.querySelector('img').alt;setZoom(100);mapDialog.showModal();viewport.scrollTo(0,0);document.body.style.overflow='hidden';}));
document.querySelector('#zoom-in').addEventListener('click',()=>setZoom(zoom+50));
document.querySelector('#zoom-out').addEventListener('click',()=>setZoom(zoom-50));
document.querySelector('#map-close').addEventListener('click',()=>mapDialog.close());
mapDialog.addEventListener('click',event=>{if(event.target===mapDialog){const r=mapDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)mapDialog.close();}});
mapDialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus({preventScroll:true});});
