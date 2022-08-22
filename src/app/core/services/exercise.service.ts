import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Exercice} from 'app/modules/admin/exercise/types/exercice';

const BASE_URL = 'http://localhost:8080/exercice';

@Injectable({
    providedIn: 'root',
})
export class ExerciseService extends BaseService {
    constructor(private http: HttpClient) {
        super(http);
    }

    createExercice(exercice: Exercice): Observable<Exercice> {
        return this.http.post<Exercice>(`${BASE_URL}/create`, exercice);
    }

    getAllExercices(): Observable<Exercice[]> {
        return this.http.get<Exercice[]>(`${BASE_URL}/list-all`);
    }

    updateExercise(
        exercise: Exercice,
        exerciceId: string
    ): Observable<Exercice> {
        return this.http.put<Exercice>(`${BASE_URL}/${exerciceId}`, exercise);
    }

    getById(id: string): Observable<Exercice> {
        return this.http.get<Exercice>(`${BASE_URL}/find-one/${id}`);
    }
}
