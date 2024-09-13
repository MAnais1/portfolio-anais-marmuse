async function GetData() {
  const response = await fetch("/data.json");
  return await response.json();
}

/* declenche la demande de la ressource*/
async function Projets() {
  const response = await GetData();
  console.log(response);

  const tprojet = document.getElementById("tprojet");

  console.log(response);
  const body = document.querySelector("body");

  response.projets.forEach((element) => {
    /*creation et affichage projets*/
    const divCard = document.createElement("div");
    divCard.classList.add("projet-card");
    const img = document.createElement("img");
    const divText = document.createElement("div");
    divText.classList.add("card-texte");
    const h3 = document.createElement("h3");
    const texte = document.createElement("p");

    divCard.appendChild(img);
    divCard.appendChild(divText);
    divText.appendChild(h3);
    divText.appendChild(texte);
    tprojet.appendChild(divCard);
    img.src = element.picture;
    h3.textContent = element.title;
    texte.textContent = element.tags;

    /*creation et affichage de la modale*/
    const modal = document.createElement("div");
    modal.classList.add("modal");
    body.appendChild(modal);

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-div");
    modal.appendChild(modalDiv);

    /*on crée éléments de modale ( enfant de modaleDiv)*/
    const skip = document.createElement("i");
    skip.classList.add("fa-solid", "fa-xmark", "skip");
    modalDiv.appendChild(skip);

    const modalHead = document.createElement("div");
    modalHead.classList.add("modal-head");
    modalDiv.appendChild(modalHead);

    /*creation éléments de modalHead*/
    const titreModal = document.createElement("h2");
    titreModal.textContent = element.title;
    modalHead.appendChild(titreModal);

    const divLien = document.createElement("div");
    divLien.classList.add("lien");
    modalHead.appendChild(divLien);

    /*crea éléments divLien*/
    const lienGit = document.createElement("a");
    lienGit.href = element.github;
    const iconGit = document.createElement("i");
    iconGit.classList.add("fa-brands", "fa-github");
    divLien.appendChild(lienGit);
    lienGit.appendChild(iconGit);

    const lienPage = document.createElement("a");
    lienPage.href = element.page;
    const iconPage = document.createElement("i");
    iconPage.classList.add("fa-solid", "fa-globe");
    divLien.appendChild(lienPage);
    lienPage.appendChild(iconPage);
    /*fin créa modalHEad*/

    /*Reprise création dans modalDiv*/
    const imgModal = document.createElement("img");
    imgModal.src = element.picture;
    imgModal.alt = element.title;
    modalDiv.appendChild(imgModal);

    const textModal = document.createElement("div");
    textModal.classList.add("modal-text");
    modalDiv.appendChild(textModal);

    /*creation éléments de textModal*/
    const description = document.createElement("p");
    description.textContent = element.description;
    textModal.appendChild(description);

    const divSkillTags = document.createElement("div");
    divSkillTags.classList.add("skill-tags");
    textModal.appendChild(divSkillTags);

    /* création éléments de divSkillTags*/
    const divTags = document.createElement("div");
    divTags.classList.add("div-tags");
    divSkillTags.appendChild(divTags);

    /*Création éléments de divTags*/
    const h3Tags = document.createElement("h3");
    h3Tags.textContent = "Outils :";
    divTags.appendChild(h3Tags);

    const listTags = document.createElement("ul");
    divTags.appendChild(listTags);

    /*Création des tags dans liste listTags*/
    element.tags.forEach((tag) => {
      const tagLi = document.createElement("li");
      tagLi.textContent = tag;
      listTags.appendChild(tagLi);
    });

    const divSkills = document.createElement("div");
    divSkills.classList.add("div-skill");
    divSkillTags.appendChild(divSkills);

    /*Création éléments de divSkills*/
    const h3Skills = document.createElement("h3");
    h3Skills.textContent = "Compétences :";
    divSkills.appendChild(h3Skills);

    const listSkills = document.createElement("ul");
    divSkills.appendChild(listSkills);

    /*Création des skills dans liste listSkills*/
    element.skill.forEach((skill) => {
      const skillLi = document.createElement("li");
      skillLi.textContent = skill;
      listSkills.appendChild(skillLi);
    });

    /*Ouverture et fermeture de la modale*/
    divCard.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    skip.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target.className === "modal") {
        modal.style.display = "none";
      }
    });
  });
}

Projets();
