import { Column, PrimaryGeneratedColumn } from 'typeorm';

export function IDColumn() {
  return Column({ type: 'uuid' });
}

export function PrimaryIDColumn(){
    return PrimaryGeneratedColumn('uuid')
}