import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable} from 'typeorm';
import { Exercicio } from './exercicio'

@Entity('treino')
export class Treino {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string

  @OneToMany(() => Exercicio, exercicio => exercicio.treino)
  exercicios: Exercicio[]
}