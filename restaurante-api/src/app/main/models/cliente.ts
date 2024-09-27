export interface Cliente {
  id?: number;
  nome: string;
  cpf: string;
  dataCadastro: Date;
  dataNascimento: Date;
  quantGasto: number;
  sobrenome: string;
  telefone: string;
  sexo: string;
  flgBloqueado: boolean;
  restauranteId: number;

}
