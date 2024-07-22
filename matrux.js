/*....................pour le boutton de choix.................................. */
var acc = document.getElementsByClassName("btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}
/*.................. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx........................ */
 /*....................somme pour le matrice à 2 ligne et 2 colone ....................*/
  function somme(){
    var a,b,c,d,e,f,g,h,i,j,k,l;
       a =Number(document.getElementById("aa").value);
       b =Number(document.getElementById("ab").value);
       c =Number(document.getElementById("ba").value);
       d =Number(document.getElementById("bb").value);
       e =Number(document.getElementById("cc").value);
       f =Number(document.getElementById("cd").value);
       g =Number(document.getElementById("dc").value);
       h =Number(document.getElementById("dd").value);
       i= a+e ;document.getElementById("ee").value=i;
       j= b+f ;document.getElementById("ef").value=j;
       k= c+g ;document.getElementById("fe").value=k;
       l= d+h ;document.getElementById("ff").value=l;
  }
   /* ...................produit pour le matrice à 2 ligne et 2 colone ....................*/
  function produit(){
    var a,b,c,d,e,f,g,h,i,j,k,l;
       a =Number(document.getElementById("aa").value);
       b =Number(document.getElementById("ab").value);
       c =Number(document.getElementById("ba").value);
       d =Number(document.getElementById("bb").value);
       e =Number(document.getElementById("cc").value);
       f =Number(document.getElementById("cd").value);
       g =Number(document.getElementById("dc").value);
       h =Number(document.getElementById("dd").value);
       i= (a*e)+(b*g);document.getElementById("ee").value=i;
       j=(a*f)+(b*h);document.getElementById("ef").value=j;
       k= (c*e)+(d*g) ;document.getElementById("fe").value=k;
       l= (c*f)+(d*h);document.getElementById("ff").value=l;
  }
  /*=========================somme de matrice à 4====================================*/ 
  function sylvio(){
var a1z1,a1z2,a1z3,a1z4,a2z1,a2z2,a2z3,a2z3,a3z1,a3z2,a3z3,a3z4,a4z1,a4z2,a4z3,a4z4,b1z1,b1z2,b1z3,b1z4,b2z1,b2z2,b2z3,b2z4,b3z1,b3z2,b3z3,b3z4,b4z1,b4z2,b4z3,b4z4,c1z1,c1z2,c1z3,c1z4,c2z1,c2z2,c2z3,c2z4,c3z1,c3z2,c3z3,c3z4,c4z1,c4z2,c4z3,c4z4;
a1z1=Number(document.getElementById("a11").value);
a1z2=Number(document.getElementById("a12").value);
a1z3=Number(document.getElementById("a13").value);
a1z4=Number(document.getElementById("a14").value);
a2z1=Number(document.getElementById("a21").value);
a2z2=Number(document.getElementById("a22").value);
a2z3=Number(document.getElementById("a23").value);
a2z4=Number(document.getElementById("a24").value);
a3z1=Number(document.getElementById("a31").value);
a3z2=Number(document.getElementById("a32").value);
a3z3=Number(document.getElementById("a33").value);
a3z4=Number(document.getElementById("a34").value);
a4z1=Number(document.getElementById("a41").value);
a4z2=Number(document.getElementById("a42").value);
a4z3=Number(document.getElementById("a43").value);
a4z4=Number(document.getElementById("a44").value);

b1z1=Number(document.getElementById("b11").value);
b1z2=Number(document.getElementById("b12").value);
b1z3=Number(document.getElementById("b13").value);
b1z4=Number(document.getElementById("b14").value);
b2z1=Number(document.getElementById("b21").value);
b2z2=Number(document.getElementById("b22").value);
b2z3=Number(document.getElementById("b23").value);
b2z4=Number(document.getElementById("b24").value);
b3z1=Number(document.getElementById("b31").value);
b3z2=Number(document.getElementById("b32").value);
b3z3=Number(document.getElementById("b33").value);
b3z4=Number(document.getElementById("b34").value);
b4z1=Number(document.getElementById("b41").value);
b4z2=Number(document.getElementById("b42").value);
b4z3=Number(document.getElementById("b43").value);
b4z4=Number(document.getElementById("b44").value);

c1z1= a1z1+b1z1 ;document.getElementById("c11").value=c1z1;
c1z2= a1z2+b1z2 ;document.getElementById("c12").value=c1z2;
c1z3= a1z3+b1z3 ;document.getElementById("c13").value=c1z3;
c1z4= a1z4+b1z4 ;document.getElementById("c14").value=c1z4;
c2z1= a2z1+b2z1 ;document.getElementById("c21").value=c2z1;
c2z2= a2z2+b2z2 ;document.getElementById("c22").value=c2z2;
c2z3= a2z3+b2z3 ;document.getElementById("c23").value=c2z3;
c2z4= a2z4+b2z4 ;document.getElementById("c24").value=c2z4;
c3z1= a3z1+b3z1 ;document.getElementById("c31").value=c3z1;
c3z2= a3z2+b3z2 ;document.getElementById("c32").value=c3z2;
c3z3= a3z3+b3z3 ;document.getElementById("c33").value=c3z3;
c3z4= a3z4+b3z4 ;document.getElementById("c34").value=c3z4;
c4z1= a4z1+b4z1 ;document.getElementById("c41").value=c4z1;
c4z2= a4z2+b4z2 ;document.getElementById("c42").value=c4z2;
c4z3= a4z3+b4z3 ;document.getElementById("c43").value=c4z3;
c4z4= a4z4+b4z4 ;document.getElementById("c44").value=c4z4;
} 

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% matrice à 4 dimmension %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
function multiplier(){
  var a1z1,a1z2,a1z3,a1z4,a2z1,a2z2,a2z3,a2z3,a3z1,a3z2,a3z3,a3z4,a4z1,a4z2,a4z3,a4z4,b1z1,b1z2,b1z3,b1z4,b2z1,b2z2,b2z3,b2z4,b3z1,b3z2,b3z3,b3z4,b4z1,b4z2,b4z3,b4z4,c1z1,c1z2,c1z3,c1z4,c2z1,c2z2,c2z3,c2z4,c3z1,c3z2,c3z3,c3z4,c4z1,c4z2,c4z3,c4z4;
/*-----------------------1er tableau------------------ */  
a1z1=Number(document.getElementById("a11").value);
a1z2=Number(document.getElementById("a12").value);
a1z3=Number(document.getElementById("a13").value);
a1z4=Number(document.getElementById("a14").value);
a2z1=Number(document.getElementById("a21").value);
a2z2=Number(document.getElementById("a22").value);
a2z3=Number(document.getElementById("a23").value);
a2z4=Number(document.getElementById("a24").value);
a3z1=Number(document.getElementById("a31").value);
a3z2=Number(document.getElementById("a32").value);
a3z3=Number(document.getElementById("a33").value);
a3z4=Number(document.getElementById("a34").value);
a4z1=Number(document.getElementById("a41").value);
a4z2=Number(document.getElementById("a42").value);
a4z3=Number(document.getElementById("a43").value);
a4z4=Number(document.getElementById("a44").value);
/*7777777777777777 2m tableau777777777777777777777777 */
b1z1=Number(document.getElementById("b11").value);
b1z2=Number(document.getElementById("b12").value);
b1z3=Number(document.getElementById("b13").value);
b1z4=Number(document.getElementById("b14").value);
b2z1=Number(document.getElementById("b21").value);
b2z2=Number(document.getElementById("b22").value);
b2z3=Number(document.getElementById("b23").value);
b2z4=Number(document.getElementById("b24").value);
b3z1=Number(document.getElementById("b31").value);
b3z2=Number(document.getElementById("b32").value);
b3z3=Number(document.getElementById("b33").value);
b3z4=Number(document.getElementById("b34").value);
b4z1=Number(document.getElementById("b41").value);
b4z2=Number(document.getElementById("b42").value);
b4z3=Number(document.getElementById("b43").value);
b4z4=Number(document.getElementById("b44").value);
/*+++++++++++++++++++++++++resultat en première ligne+++++++++++++++++++++++++++++++++++*/ 
c1z1= a1z1*b1z1+a1z2*b2z1+a1z3*b3z1+a1z4*b4z1 ;document.getElementById("c11").value=c1z1;
c1z2= a1z1*b1z2+a1z2*b2z2+a1z3*b3z2+a1z4*b4z2 ;document.getElementById("c12").value=c1z2;
c1z3= a1z1*b1z3+a1z2*b2z3+a1z3*b3z3+a1z4*b4z3 ;document.getElementById("c13").value=c1z3;
c1z4= a1z1*b1z4+a1z2*b2z4+a1z3*b3z4+a1z4*b4z4 ;document.getElementById("c14").value=c1z4;
/*+++++++++++++++++++++resultat en 2m ligne ++++++++++++++++++++++++++++++++++*/
c2z1= a2z1*b1z1+a2z2*b2z1+a2z3*b3z1+a2z4*b4z1 ;document.getElementById("c21").value=c2z1;
c2z2= a2z1*b1z2+a2z2*b2z2+a2z3*b3z2+a2z4*b4z2 ;document.getElementById("c22").value=c2z2;
c2z3= a2z1*b1z3+a2z2*b2z3+a2z3*b3z3+a2z4*b4z3 ;document.getElementById("c23").value=c2z3;
c2z4= a2z1*b1z4+a2z2*b2z4+a2z3*b3z4+a2z4*b4z4 ;document.getElementById("c24").value=c2z4;
/*+++++++++++++++++++++resultat en 3m ligne ++++++++++++++++++++++++++++++++++*/
c3z1= a3z1*b1z1+a3z2*b2z1+a3z3*b3z1+a3z4*b4z1 ;document.getElementById("c31").value=c3z1;
c3z2= a3z1*b1z2+a3z2*b2z2+a3z3*b3z3+a3z4*b4z2 ;document.getElementById("c32").value=c3z2;
c3z3= a3z1*b1z3+a3z2*b2z3+a3z3*b3z3+a3z4*b4z3 ;document.getElementById("c33").value=c3z3;
c3z4= a3z1*b1z4+a3z2*b2z4+a3z3*b3z3+a3z4*b4z4 ;document.getElementById("c34").value=c3z4;
/*+++++++++++++++++++++resultat en 4m ligne ++++++++++++++++++++++++++++++++++*/
c4z1= a4z1*b1z1+a4z2*b2z1+a4z3*b3z1+a4z4*b4z1 ;document.getElementById("c41").value=c4z1;
c4z2= a4z1*b1z2+a4z2*b2z2+a4z3*b3z2+a4z4*b4z2 ;document.getElementById("c42").value=c4z2;
c4z3= a4z1*b1z3+a4z2*b2z3+a4z3*b3z3+a4z4*b4z3 ;document.getElementById("c43").value=c4z3;
c4z4= a4z1*b1z4+a4z2*b2z4+a4z3*b3z4+a4z4*b4z4 ;document.getElementById("c44").value=c4z4;
 
}
/* ***********matrice à 3 dimension*************** */
function fusion(){
  var saa11,saa12,saa13,saa21,saa22,saa23,saa31,saa32,saa33,sbb11,sbb12,sbb13,sbb21,sbb22,sbb23,sbb31,sbb32,sbb33,scc11,scc12,scc13,sc21,scc22,scc23,scc24,scc31,scc32,scc33;

  saa11=Number(document.getElementById("aa11").value);
  saa12=Number(document.getElementById("aa12").value);
  saa13=Number(document.getElementById("aa13").value);
  saa21=Number(document.getElementById("aa21").value);
  saa22=Number(document.getElementById("aa22").value);
  saa23=Number(document.getElementById("aa23").value);
  saa31=Number(document.getElementById("aa31").value);
  saa32=Number(document.getElementById("aa32").value);
  saa33=Number(document.getElementById("aa33").value);
  sbb11=Number(document.getElementById("bb11").value);
  sbb12=Number(document.getElementById("bb12").value);
  sbb13=Number(document.getElementById("bb13").value);
  sbb21=Number(document.getElementById("bb21").value);
  sbb22=Number(document.getElementById("bb22").value);
  sbb23=Number(document.getElementById("bb23").value);
  sbb31=Number(document.getElementById("bb31").value);
  sbb32=Number(document.getElementById("bb32").value);
  sbb33=Number(document.getElementById("bb33").value)
    scc11=saa11+sbb11 ;document.getElementById("cc11").value=scc11;
    scc12=saa12+sbb12 ;document.getElementById("cc12").value=scc12;
    scc13=saa13+sbb13 ;document.getElementById("cc13").value=scc13;
    scc21=saa21+sbb21 ;document.getElementById("cc21").value=scc21;
    scc22=saa22+sbb22 ;document.getElementById("cc22").value=scc22;
    scc23=saa23+sbb23 ;document.getElementById("cc23").value=scc23;
    scc31=saa31+sbb31 ;document.getElementById("cc31").value=scc31;
    scc32=saa32+sbb32 ;document.getElementById("cc32").value=scc32;
    scc33=saa33+sbb33 ;document.getElementById("cc33").value=scc33;
}
/* ...............multiplication pour le matrice à 4dimmension...................*/
function anicet(){
  var saa11,saa12,saa13,saa21,saa22,saa23,saa31,saa32,saa33,sbb11,sbb12,sbb13,sbb21,sbb22,sbb23,sbb31,sbb32,sbb33,scc11,scc12,scc13,scc21,scc22,scc23,scc31,scc32,scc33;

  saa11=Number(document.getElementById("aa11").value);
  saa12=Number(document.getElementById("aa12").value);
  saa13=Number(document.getElementById("aa13").value);
  saa21=Number(document.getElementById("aa21").value);
  saa22=Number(document.getElementById("aa22").value);
  saa23=Number(document.getElementById("aa23").value);
  saa31=Number(document.getElementById("aa31").value);
  saa32=Number(document.getElementById("aa32").value);
  saa33=Number(document.getElementById("aa33").value);
  sbb11=Number(document.getElementById("bb11").value);
  sbb12=Number(document.getElementById("bb12").value);
  sbb13=Number(document.getElementById("bb13").value);
  sbb21=Number(document.getElementById("bb21").value);
  sbb22=Number(document.getElementById("bb22").value);
  sbb23=Number(document.getElementById("bb23").value);
  sbb31=Number(document.getElementById("bb31").value);
  sbb32=Number(document.getElementById("bb32").value);
  sbb33=Number(document.getElementById("bb33").value);
/*!!!!!!!!!!!!!!!!!!!!!solution pour la 1er ligne!!!!!!!!!!!!!!!!!!!!!!! */
scc11= saa11*sbb11+saa12*sbb21+saa13*sbb31 ;document.getElementById("cc11").value=scc11;
scc12= saa11*sbb12+saa12*sbb22+saa13*sbb32 ;document.getElementById("cc12").value=scc12;
scc13= saa11*sbb13+saa12*sbb23+saa13*sbb33 ;document.getElementById("cc13").value=scc13;
/*!!!!!!!!!!!!!!!!!!!!!solution pour la 2em ligne!!!!!!!!!!!!!!!!!!!!!!! */
  scc21= saa21*sbb11+saa22*sbb21+saa23*sbb31 ;document.getElementById("cc21").value=scc21;
  scc22= saa21*sbb12+saa22*sbb22+saa23*sbb32 ;document.getElementById("cc22").value=scc22;
  scc23= saa21*sbb13+saa22*sbb23+saa23*sbb33 ;document.getElementById("cc23").value=scc23;
/*!!!!!!!!!!!!!!!!!!!!!solution pour la 3em ligne!!!!!!!!!!!!!!!!!!!!!!! */
scc31= saa31*sbb11+saa32*sbb21+saa33*sbb31 ;document.getElementById("cc31").value=scc31;
scc32= saa31*sbb12+saa32*sbb22+saa33*sbb33 ;document.getElementById("cc32").value=scc32;
scc33= saa31*sbb13+saa32*sbb23+saa33*sbb33 ;document.getElementById("cc33").value=scc33;
}