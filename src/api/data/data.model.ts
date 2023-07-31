import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Data {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    timestamp: string;

    @Column({type: 'double'})
    water_temperature: number

    @Column({type: 'double'})
    outdoor_temperature: number
}