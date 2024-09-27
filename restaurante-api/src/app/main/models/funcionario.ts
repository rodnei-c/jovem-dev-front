
export interface Funcionario {
  id?: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;
  sexo: string;
  dataAdmissao: Date;
  dataNascimento: Date;
  cargo: string;
  cargaHoraria: number;
  salario: number;
  restauranteId: number;
}
