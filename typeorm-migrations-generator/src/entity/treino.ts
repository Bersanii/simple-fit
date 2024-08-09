import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';
import { Exercicio } from './exercicio'

@Entity('treino')
export class Treino {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  name: string

  @ManyToMany(() => Exercicio)
  @JoinTable()
  exercicios: Exercicio[]
}