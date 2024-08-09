import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Treino } from './treino';
import { EspecificacaoExercicio } from './especificacaoExercicio';

@Entity('exercicio')
export class Exercicio {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @Column('integer')
  series: number

  @Column('integer')
  repeticoes: number

  @Column('integer')
  peso: number

  @ManyToOne(() => Treino, treino => treino.exercicios)
  treino: Treino 

  @ManyToOne(() => EspecificacaoExercicio, especificacaoExercicio => especificacaoExercicio.exercicios)
  especificacao: EspecificacaoExercicio 
}