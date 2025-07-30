import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Depense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  montant: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ nullable: true })
  categorie?: string;
}
