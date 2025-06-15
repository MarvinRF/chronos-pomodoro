import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  return format(date, 'dd/MM/yyyy HH:mm', { locale: ptBR });
}
