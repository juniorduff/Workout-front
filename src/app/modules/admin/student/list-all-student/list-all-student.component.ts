import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'app/core/services/student.service';
import { catchError } from 'rxjs';

export interface Student {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: Date;
    updated_at: Date;
    workouts: any[];
}

@Component({
    selector: 'app-list-all-student',
    templateUrl: './list-all-student.component.html',
    styleUrls: ['./list-all-student.component.scss'],
})
export class ListAllStudentComponent implements OnInit {
    students: Student[] = [];

    constructor(
        private studentService: StudentService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.studentService.getAllStudents().subscribe({
            next: (data) => {
                this.students = data;
            },
            error: (error) => {
                catchError(error);
            },
        });
    }

    async updateUser(id: string): Promise<void> {
        await this._router.navigate(['student/update', id]);
    }
}
