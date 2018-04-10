function surligne(champ, erreur)
{
    if(erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

function verifNom(champ)
{
    if(champ.value.length == 0)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifAdresse(champ)
{
    if(champ.value.length == 0)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifVille(champ)
{
    if(champ.value.length == 0)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ,false);
        return true;
    }
}

function verifCP(champ)
{
    var cp = parseInt(champ.value);
    if(isNaN(cp) || champ.value.length != 5)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifMail(champ)
{
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifTel(champ)
{
    var cp = parseInt(champ.value);
    if(isNaN(cp) || champ.value.length != 10)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

/*
function verifForm(f) {
    var nomOK = verifNom(f.nom);
    var adresseOK = verifAdresse(f.adresse);
    var villeOK = verifVille(f.ville);
    var cpOK = verifCP(f.ville);
    var mailOK = verifMail(f.mail);
    var telOK = verifTel(f.tel);

    if(nomOK && adresseOK && villeOK && cpOK && mailOK && telOK)
        return true;
    else
    {
        alert("Veuillez remplir correctement tous les champs.");
        return false;
    }
}
*/

