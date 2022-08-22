import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable} from 'rxjs';
import {BaseService} from './base.service';
import {StudentData} from 'app/modules/admin/student/create-studenty/create-student.component';

export type WorkoutData = {
    repetitions: string;
    rest_time: string;
    variation: string;
    observations: string;
    studentID: string;
    coachID: string;
    exercicesIDs: string[];
};

@Injectable({
    providedIn: 'root',
})
export class WorkoutService extends BaseService {
    constructor(private http: HttpClient) {
        super(http);
    }

    createWorkout(workout: WorkoutData): Observable<WorkoutData> {
        console.log(workout);
        return this.http
            .post<WorkoutData>(
                'http://localhost:8080/workout/create',
                workout,
                this.getHeaderJson()
            )
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    getTheCouth(id: string): Observable<StudentData> {
        return this.http
            .get<StudentData>(
                'http://localhost:8080/workout/' + id,
                this.getHeaderJson()
            )
            .pipe(map(this.extractData), catchError(this.serviceError));
    }
}
