import {Component, OnInit} from '@angular/core';
import {Exercice} from '../../exercise/types/exercice';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExerciseService} from '../../../../core/services/exercise.service';
import {catchError} from 'rxjs';
import {Student} from '../../student/list-all-student/list-all-student.component';
import {StudentService} from '../../../../core/services/student.service';
import {Coach, CoachService} from '../../../../core/services/coach.service';
import {
    WorkoutData,
    WorkoutService,
} from '../../../../core/services/workout.service';

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
    coach: WorkoutData;
    options: any[] = [
        {_id: '1', status: 'waiting'},
        {_id: '2', status: 'open'},
        {_id: '3', status: 'in_progress'},
        {_id: '4', status: 'close'},
    ];

    constructor(
        private toast: ToastrService,
        private formBuilder: FormBuilder,
        private studentService: StudentService,
        private exerciseService: ExerciseService,
        private coachService: CoachService,
        private workoutService: WorkoutService
    ) {
    }

    ngOnInit(): void {
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
            this.coach = {...this.registerWorkoutForm.value};
            this.workoutService.createWorkout(this.coach).subscribe({
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
        } else {
            this.toast.info('Atenção existem campos obrigatórios em branco');
        }
    }
}
