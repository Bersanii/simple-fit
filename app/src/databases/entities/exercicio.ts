import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from 'typeorm';

@Entity('exercicio')
export class Exercicio {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  name: string
}