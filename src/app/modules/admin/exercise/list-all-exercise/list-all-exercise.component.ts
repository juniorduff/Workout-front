import {Component, OnInit} from '@angular/core';
import {catchError} from 'rxjs';
import {Category, Exercice} from '../types/exercice';
import {ExerciseService} from '../../../../core/services/exercise.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list-all-exercise',
    templateUrl: './list-all-exercise.component.html',
    styleUrls: ['./list-all-exercise.component.scss'],
})
export class ListAllExerciseComponent implements OnInit {
    exercisesBack: Exercice[] = [];
    exercisesChest: Exercice[] = [];
    exercisesLegs: Exercice[] = [];
    exercisesShoulders: Exercice[] = [];
    exercisesArms: Exercice[] = [];
    exercisesAbs: Exercice[] = [];
    exerciseToUpdate: Exercice;

    constructor(
        private exerciseService: ExerciseService,
        private _router: Router
    ) {
    }

    ngOnInit(): void {
        this.exerciseService.getAllExercices().subscribe({
            next: (data) => {
                this.exercisesBack = this.filterExercises(data, Category.BACK);
                this.exercisesShoulders = this.filterExercises(
                    data,
                    Category.SHOULDERS
                );
                this.exercisesAbs = this.filterExercises(data, Category.ABS);
                this.exercisesLegs = this.filterExercises(data, Category.LEGS);
                this.exercisesChest = this.filterExercises(
                    data,
                    Category.CHEST
                );
                this.exercisesArms = this.filterExercises(data, Category.ARMS);
            },
            error: (error) => {
                catchError(error);
            },
        });
    }

    filterExercises(exercises: Exercice[], category: Category): Exercice[] {
        return exercises.filter((exercise) => exercise.category === category);
    }

    async updateExercise(id: string): Promise<void> {
        await this._router.navigate(['exercise/update', id]);
    }
}
