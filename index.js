async function GetData(){let e=await fetch("./data.json");return await e.json()}async function Projets(){let e=await GetData();console.log(e);let t=document.getElementById("tprojet");console.log(e);let l=document.querySelector("body");e.projets.forEach(e=>{let a=document.createElement("div");a.classList.add("projet-card");let d=document.createElement("img"),n=document.createElement("div");n.classList.add("card-texte");let i=document.createElement("h3"),s=document.createElement("p");a.appendChild(d),a.appendChild(n),n.appendChild(i),n.appendChild(s),t.appendChild(a),d.src=e.picture,d.alt=e.title,i.textContent=e.title,s.textContent=e.tags;let p=document.createElement("div");p.classList.add("modal"),l.appendChild(p);let c=document.createElement("div");c.classList.add("modal-div"),p.appendChild(c);let r=document.createElement("i");r.classList.add("fa-solid","fa-xmark","skip"),c.appendChild(r);let h=document.createElement("div");h.classList.add("modal-head"),c.appendChild(h);let m=document.createElement("h2");m.textContent=e.title,h.appendChild(m);let o=document.createElement("div");o.classList.add("lien"),h.appendChild(o);let C=document.createElement("a");C.href=e.github,C.target="_blank";let E=document.createElement("i");E.classList.add("fa-brands","fa-github"),o.appendChild(C),C.appendChild(E);let g=document.createElement("a");g.href=e.page,g.target="_blank";let v=document.createElement("i");v.classList.add("fa-solid","fa-globe"),o.appendChild(g),g.appendChild(v);let L=document.createElement("img");L.src=e.picture,L.alt=e.title,c.appendChild(L);let f=document.createElement("div");f.classList.add("modal-text"),c.appendChild(f);let x=document.createElement("p");x.textContent=e.description,f.appendChild(x);let u=document.createElement("div");u.classList.add("skill-tags"),f.appendChild(u);let y=document.createElement("div");y.classList.add("div-tags"),u.appendChild(y);let k=document.createElement("h3");k.textContent="Outils :",y.appendChild(k);let b=document.createElement("ul");y.appendChild(b),e.tags.forEach(e=>{let t=document.createElement("li");t.textContent=e,b.appendChild(t)});let j=document.createElement("div");j.classList.add("div-skill"),u.appendChild(j);let w=document.createElement("h3");w.textContent="Comp\xe9tences :",j.appendChild(w);let D=document.createElement("ul");j.appendChild(D),e.skill.forEach(e=>{let t=document.createElement("li");t.textContent=e,D.appendChild(t)}),a.addEventListener("click",()=>{p.style.display="flex"}),r.addEventListener("click",()=>{p.style.display="none"}),p.addEventListener("click",e=>{"modal"===e.target.className&&(p.style.display="none")})})}Projets();