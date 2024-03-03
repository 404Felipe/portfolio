import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "Faço a utilização do sistema operacional Kali Linux nas minhas atividades para a facilidade de conter ferramentas e configurações que ajudam bastante no dia a dia. "
);
hoverChangeDescription(
  ".css",
  "Utilizo bastante essa ferramenta nos testes que faço, ja que a mesma ajuda e auxilia bastante na hora de fazer os testes necessários.."
);
hoverChangeDescription(
  ".js",
  "Conto bastante com a utilização do programa Metasploit, pois ajuda muito em momentos onde se precisa fazer um RCE em algum sistema que estou verificando."
);
hoverChangeDescription(
  ".next",
  "Metasploit, uma ferramenta onde se mais faz diferença na hora de fazer um Pentest, ajudando bastante e auxiliando em praticamente todo o processo."
);