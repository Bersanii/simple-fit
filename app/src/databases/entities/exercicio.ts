import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, CreateDateColumn} from 'typeorm';

@Entity('exercicio')
export class Exercicio {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  nome: string
}