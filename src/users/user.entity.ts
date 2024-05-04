import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  postCode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;
}
