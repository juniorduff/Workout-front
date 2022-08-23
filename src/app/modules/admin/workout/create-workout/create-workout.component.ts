import { Component, OnInit } from '@angular/core';
import { Exercice } from '../../exercise/types/exercice';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseService } from '../../../../core/services/exercise.service';
import { catchError } from 'rxjs';
import { Student } from '../../student/list-all-student/list-all-student.component';
import { StudentService } from '../../../../core/services/student.service';
import { Coach, CoachService } from '../../../../core/services/coach.service';
import {
    WorkoutData,
    WorkoutService,
} from '../../../../core/services/workout.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Workout {
    id: string;
    repetitions: string;
    rest_time: string;
    variation: string;
    observations: string;
    created_at: string;
    updated_at: string;
    exercices?: Exercice[];
    coach_id?: string;
    student_id?: string;
}

@Component({
    selector: 'app-create-workout',
    templateUrl: './create-workout.component.html',
    styleUrls: ['./create-workout.component.scss'],
})
export class CreateWorkoutComponent implements OnInit {
    registerWorkoutForm: FormGroup;
    exercises: Exercice[];
    students: Student[];
    coaches: Coach[];
    workout: WorkoutData;
    workoutUpdated: Workout;
    workoutIdUpdate: string;
    options: any[] = [
        { _id: '1', status: 'waiting' },
        { _id: '2', status: 'open' },
        { _id: '3', status: 'in_progress' },
        { _id: '4', status: 'close' },
    ];

    constructor(
        private toast: ToastrService,
        private formBuilder: FormBuilder,
        private studentService: StudentService,
        private exerciseService: ExerciseService,
        private coachService: CoachService,
        private workoutService: WorkoutService,
        private router: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.router.params.subscribe((params) => {
            const { id } = params;
            this.workoutIdUpdate = id;
            if (this.workoutIdUpdate) {
                this.workoutService.getById(id).subscribe((data) => {
                    this.workoutUpdated = data;
                    console.log(data, 'data');
                    this.loadWorkout(data);
                });
            }
        });

        this.startForm();
        this.exerciseService.getAllExercices().subscribe({
            next: (data) => {
                this.exercises = data;
                console.log(this.exercises);
            },
            error: (error) => {
                catchError(error);
            },
        });
        this.coachService.getTheCouth().subscribe({
            next: (data) => {
                this.coaches = data;
                console.log(this.coaches);
            },
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

    startForm(): void {
        this.registerWorkoutForm = this.formBuilder.group({
            repetitions: [null, [Validators.required]],
            rest_time: [null, [Validators.required]],
            variation: [null],
            observations: [null],
            studentID: [null, [Validators.required]],
            coachID: [null, [Validators.required]],
            exercicesIDs: [null, [Validators.required]],
        });
    }

    registerWorkout(): void {
        if (this.registerWorkoutForm.valid) {
            this.workout = { ...this.registerWorkoutForm.value };
            console.log(this.workout, 'update');
            if (this.workoutIdUpdate) {
                this.workoutService
                    .update(this.workoutIdUpdate, this.workout)
                    .subscribe({
                        next: async (data) => {
                            this.toast.success('Workout updated successfully');
                            await this._router.navigate(['/workout/list']);
                        },
                    });
            } else {
                this.workoutService.createWorkout(this.workout).subscribe({
                    next: () => {
                        this.registerWorkoutForm.reset();
                        this.toast.success('Workout registration successful');
                    },
                    error: (err: any) => {
                        catchError(err);
                        this.toast.error('Ocorreu erro no servidor.');
                    },
                });
                this.toast.success('Treino cadastrado com sucesso');
            }
        } else {
            this.toast.info('Atenção existem campos obrigatórios em branco');
        }
    }

    loadWorkout(data: Workout): void {
        const exercicesIDs = data.exercices.map((exercise) => exercise.id);
        this.registerWorkoutForm.patchValue({
            repetitions: data.repetitions,
            rest_time: data.rest_time,
            variation: data.variation,
            observations: data.observations,
            studentID: data.student_id,
            coachID: data.coach_id,
            exercicesIDs,
        });
    }
}
