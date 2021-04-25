import { Entity, Column, UpdateDateColumn, CreateDateColumn, PrimaryColumn } from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity("settings")
class Setting {

    @PrimaryColumn()
    id: string;
    
    @Column({ name: "user_name" })
    userName: string; 

    @Column()
    chat: boolean;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Setting };