import './App.css';
import resume from './assets/files/resume.pdf';

function App() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <p className="text-indigo-400 text-2xl font-['Preahvihear']">
          Maria Eduarda Freitas
        </p>
        <div className="flex space-x-6">
          <a href="" className="text-lg">
            Início
          </a>
          <a href="" className="text-lg">
            Sobre mim
          </a>
          <a href="" className="text-lg">
            Experiências
          </a>
          <a href="" className="text-lg">
            Projetos
          </a>
        </div>
      </div>
      <div className="h-0.5 bg-slate-800 mt-6" />
      <div className="flex mt-24 justify-between">
        <div>
          <p className="text-left text-2xl">Olá, eu sou</p>
          <p className="text-left text-5xl font-['Preahvihear'] text-indigo-400 mt-2">
            Maria Eduarda
          </p>
          <p className="text-left text-2xl mt-2">Desenvolvedora FullStack</p>
          <div className="flex space-x-6">
            <button className="w-32 bg-indigo-400 rounded p-2 mt-12">
              <a
                href="https://www.linkedin.com/in/mariaesfreitas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </button>
            <button className="w-32 bg-indigo-400 rounded p-2 mt-12">
              <a
                href="https://github.com/madusfx"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-24 items-baseline">
        <p className="text-indigo-400 text-3xl font-['Preahvihear']">
          Sobre mim
        </p>
        <p className="text-xl mt-4">Ponta Grossa, Brasil</p>
        <p className="text-left mt-4">
          Meu nome é Maria Eduarda, tenho 22 anos e sou paranaense. Minha
          história com a programação começou em 2020, quando eu entrei na
          faculdade, sem saber nada da área de tecnologia. Ao longo do curso fui
          me apaixonando e me encontrando profissionalmente e hoje sou muito
          realizada com o que eu faço. Com o fim da faculdade, tenho buscado
          fazer cursos para aprimorar meus conhecimentos e tenho trabalhado em
          alguns projetos pessoais também, além de ter dado início a uma pós de
          Engenharia de Software Ágil pela PUCPR.
          <br />
          Nas horas vagas eu costumo gostar de praticar esportes, principalmente
          musculação e corrida. Além disso, sou uma grande fã de sitcoms, e
          tenho uma paixão especial por Friends.
        </p>
        <button className="bg-indigo-400 py-2 px-6 rounded mt-12">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Baixar currículo
          </a>
        </button>
      </div>
      <div className="mt-24">
        <div>
          <p className="text-indigo-400 text-3xl font-['Preahvihear'] text-left">
            Experiencias
          </p>
        </div>
        <div className="flex mt-6 items-start">
          <div>
            <div className="flex flex-col">
              <button className="w-44 p-4 hover:bg-indigo-400 hover:border-l-4 hover:border-indigo-600">
                <p>Voltz Capital S.A.</p>
              </button>
              <button className="w-44 p-4 hover:bg-indigo-400 hover:border-l-4 hover:border-indigo-600">
                <p>Voltz Capital S.A.</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center ml-12">
            <div className="flex justify-between">
              <p className="text-2xl">Desenvolvedora Full Stack</p>
              <p>Mar 2022 - Fev 2024</p>
            </div>
            <p className="text-left mt-4">
              Durante essa experiência, tive a oportunidade de aprimorar meus
              conhecimentos em Front End e Back End. Fui responsável por
              implementar novas páginas e componentes em aplicações já
              existentes e por integrá-los com APIs RESTful, utilizando as
              tecnologias ReactJS, NextJS, Styled Components e Material UI. Além
              disso, criei uma API do zero usando Clean Architecture com NodeJS
              e NestJS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
