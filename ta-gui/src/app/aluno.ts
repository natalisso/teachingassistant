export class Aluno {
  nome: string = "";
  cpf: string = "";
  email: string = "";
  login_github: string = "";
  metas: Map<string,string> = new Map();

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.login_github = "";
    this.metas = new Map();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.login_github = this.login_github;
    aluno.metas = this.cloneMetas();
    return aluno;
  }

  cloneMetas(): Map<any,any> {
    var metas: Map<string,string> = new Map(this.metas);

    return metas;
  }
}
