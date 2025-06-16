import type { TaskModel } from '../models/TaskModel';

export type SortTaskOptions = {
  tasks: TaskModel[];
  direction?: 'asc' | 'desc';
  field?: keyof TaskModel;
};

export function sortTask({
  field = 'startDate',
  direction = 'desc',
  tasks = [],
}: SortTaskOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    // SE OS 2 FOREM NULOS, MANTEM A ORDEM ATUAL
    if (aValue === null && bValue === null) return 0;
    // SE APENAS O PRIMEIRO FOR NULO, ELE VAI PARA O FIM
    if (aValue === null) return 1;
    // SE APENAS O SEGUNDO FOR NULO, ELE VAI PARA O FIM
    if (bValue === null) return -1;

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc'
        ? aValue - bValue // 1,2,3
        : bValue - aValue; // 3,2,1
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue) //A -> Z
        : bValue.localeCompare(aValue); //Z -> A
    }

    // CASOS N TRATADOS
    //CASO NÃO SEJA NEM NÚMERO NEM STRING, NÃO FAREMOS NADA
    return 0;
  });
}
