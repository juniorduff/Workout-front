import {Component, OnInit} from '@angular/core';
import {catchError} from 'rxjs';
import {Student} from '../../student/list-all-student/list-all-student.component';
import {StudentService} from '../../../../core/services/student.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Exercice} from '../../exercise/types/exercice';

export interface Workout {
    id: string;
    repetitions: string;
    rest_time: string;
    created_at: string;
    updated_at: string;
    exercices?: Exercice[];
    observations?: null;
    variation?: null;
}

@Component({
    selector: 'app-list-workout-by-student',
    templateUrl: './list-workout-by-student.component.html',
    styleUrls: ['./list-workout-by-student.component.scss'],
})
export class ListWorkoutByStudentComponent implements OnInit {
    students: Student[];
    workouts: Workout[];
    spinner: boolean;
    findWorkoutForm: FormGroup;

    constructor(
        private studentService: StudentService,
        private formBuilder: FormBuilder
    ) {
        this.spinner = false;
    }

    ngOnInit(): void {
        this.findWorkoutForm = this.formBuilder.group({
            studentID: ['', Validators.required],
        });
        this.studentService.getAllStudents().subscribe({
            next: (data) => {
                this.students = data;
                console.log(this.students);
            },
            error: (error) => {
                catchError(error);
            },
        });
    }

    findWorkoutByStudentID(): void {
        this.spinner = true;

        this.studentService
            .findWorkoutByStudentID(this.findWorkoutForm.value.studentID)
            .subscribe({
                next: (data) => {
                    this.workouts = data;
                    setTimeout(() => {
                        this.spinner = false;
                    }, 1000);
                    console.log(this.workouts);
                },
            });
    }

    clearStudent(): void {
        this.workouts = [];
    }
}
