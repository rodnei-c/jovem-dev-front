export interface Reserva {
  id?: number;
  dataReserva: Date;
  quantPessoas: number;
  status: string;
  observacao: string;
  clienteId: string;
  mesaId: string;
}
