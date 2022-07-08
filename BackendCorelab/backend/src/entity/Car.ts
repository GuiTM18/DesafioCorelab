import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Cars{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    marca: string;

    @Column()
    preco: number;

    @Column()
    cor: string;

    @Column()
    description: string;
    
    @Column({
        default: false
    })
    finished: boolean;
 
}