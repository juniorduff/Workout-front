import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { BaseService } from './base.service';
import { StudentData } from 'app/modules/admin/student/create-studenty/create-student.component';
import { Student } from '../../modules/admin/student/list-all-student/list-all-student.component';
import { Workout } from '../../modules/admin/workout/list-workout-by-student/list-workout-by-student.component';

@Injectable({
    providedIn: 'root',
})
export class StudentService extends BaseService {
    constructor(private http: HttpClient) {
        super(http);
    }

    createStudent(student: StudentData): Observable<StudentData> {
        console.log(student);
        return this.http
            .post<StudentData>(
                'http://localhost:8080/student/create',
                student,
                this.getHeaderJson()
            )
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    getAllStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(
            'http://localhost:8080/student/find-all',
            this.getHeaderJson()
        );
    }

    findWorkoutByStudentID(studentID): Observable<Workout[]> {
        return this.http.get<Workout[]>(
            `http://localhost:8080/workout/${studentID}`,
            this.getHeaderJson()
        );
    }

    getById(id: string): Observable<Student> {
        return this.http.get<Student>(
            `http://localhost:8080/student/find-one/${id}`,
            this.getHeaderJson()
        );
    }

    updateUser(
        studentId: string,
        student: StudentData
    ): Observable<StudentData> {
        return this.http.put<Student>(
            `http://localhost:8080/student/update/${studentId}`,
            student,
            this.getHeaderJson()
        );
    }
}
