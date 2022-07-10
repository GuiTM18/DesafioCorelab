import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    nome: string;

    @Column()
    marca: string;

    @Column()
    preco: number;

    @Column()
    cor: string;

    @Column()
    ano: number;

    @Column()
    description: string;
    
    @Column({
        default: false
    })
    finished: boolean;
 
}