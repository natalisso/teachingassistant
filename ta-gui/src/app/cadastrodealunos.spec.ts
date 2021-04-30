import { AlunoService } from './aluno.service';
import { Aluno } from './aluno';

describe("O cadastro de alunos", () => {
  var cadastro: AlunoService;

  beforeEach(() => cadastro = new AlunoService())

  it("Aceita alunos sem CPF duplicado", () => {
    var aluno: Aluno = new Aluno();
    aluno.nome = "Mariana";
    aluno.cpf = "683";
    var result = cadastro.gravar(aluno);

    expect(result).not.toBeNull();

  })

  it("Não aceita alunos com CPF duplicado", () => {
    var aluno: Aluno = new Aluno();
    aluno.nome = "Mariana";
    aluno.cpf = "683";
    var result_1 = cadastro.gravar(aluno);

    aluno = new Aluno();
    aluno.nome = "Pedro";
    aluno.cpf = "683";
    var result_final = cadastro.gravar(aluno);

    expect(result_final).toBeNull();
  })

})