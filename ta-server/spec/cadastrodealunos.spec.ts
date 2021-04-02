import { CadastroDeAlunos } from '../cadastrodealunos';
import { Aluno } from '../../common/aluno';

describe("O cadastro de alunos", () => {
  var cadastro: CadastroDeAlunos;

  function cadastrarAluno(nome:string, cpf:string, email?:string) {
    var aluno: Aluno = new Aluno();
    aluno.nome = nome;
    aluno.cpf = cpf;
    if (email != void 0) {aluno.email = email}
    cadastro.cadastrar(aluno);
  }

  function atualizarAluno(nome:string, cpf:string, email?:string) {
    var aluno: Aluno = new Aluno();
    aluno.nome = nome;
    aluno.cpf = cpf;
    if (email != void 0) {aluno.email = email}
    cadastro.atualizar(aluno);
  }

  function expectSoUmAluno() {
    expect(cadastro.getAlunos().length).toBe(1);
    var aluno = cadastro.getAlunos()[0];
    return aluno;
  }

  beforeEach(() => cadastro = new CadastroDeAlunos())

  it("é inicialmente vazio", () => {
    expect(cadastro.getAlunos().length).toBe(0);
  })

  it("cadastra alunos corretamente", () => {
    cadastrarAluno("Mariana","683");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Mariana");
    expect(aluno.cpf).toBe("683");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);
  })

  it("não aceita alunos com CPF duplicado", () => {
    cadastrarAluno("Mariana","683");
    cadastrarAluno("Pedro","683");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Mariana");
  })

  it("atualiza aluno cadastrado", () => {
    cadastrarAluno("Natália","684");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Natália");
    expect(aluno.cpf).toBe("684");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);

    atualizarAluno("Luisa", "684")

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Luisa");
    expect(aluno.cpf).toBe("684");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);
  })

  it("aceita alunos com CPFs diferentes", () => {
    cadastrarAluno("Juliana","685");
    cadastrarAluno("André","686");

    expect(cadastro.getAlunos().length).toBe(2);

    var aluno = cadastro.getAlunos()[0];
    expect(aluno.nome).toBe("Juliana");

    var aluno = cadastro.getAlunos()[1];
    expect(aluno.nome).toBe("André");
  })

  it("cadastra alunos com email corretamente", () => {
    cadastrarAluno("Victor","687", "vss@cin.ufpe.br");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Victor");
    expect(aluno.cpf).toBe("687");
    expect(aluno.email).toBe("vss@cin.ufpe.br");
    expect(aluno.metas.size).toBe(0);
  })

})


