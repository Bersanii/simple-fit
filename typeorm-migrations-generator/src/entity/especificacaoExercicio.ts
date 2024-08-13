import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Treino } from './treino';
import { Exercicio } from './exercicio';

@Entity('especificacaoExercicio')
export class EspecificacaoExercicio {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @Column('text')
  grupamento: string

  @Column('text', {nullable: true})
  instrucoes?: string

  @Column('text', {nullable: true})
  equipamento?: string

  @OneToMany(() => Exercicio, exercicio => exercicio.especificacao)
  exercicios: Exercicio[] 
}