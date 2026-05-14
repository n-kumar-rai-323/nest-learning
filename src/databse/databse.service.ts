import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabseService {
    private isConnected: boolean = false;
    onModuleInit(){
        this.isConnected = true;
        console.log('Database connected successfully');
    }
    onApplicationShutdown(signal?: string){
        this.isConnected = false;
        console.log('Database disconnected successfully',signal);
    }
    getStatus(){
        return this.isConnected ? 'Database is connected' : 'Database is disconnected';
    }
}
