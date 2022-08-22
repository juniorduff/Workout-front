import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseService} from './base.service';

export interface Coach {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: string;
    updated_at: string;
    workouts?: any[] | null;
}

@Injectable({
    providedIn: 'root',
})
export class CoachService extends BaseService {
    constructor(private http: HttpClient) {
        super(http);
    }

    getTheCouth(): Observable<Coach[]> {
        return this.http.get<Coach[]>(
            'http://localhost:8080/coach/list',
            this.getHeaderJson()
        );
    }
}
