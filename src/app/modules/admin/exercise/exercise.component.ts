import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ExerciseService} from '../../../core/services/exercise.service';
import {Exercice} from './types/exercice';
import {ActivatedRoute, Router} from '@angular/router';

interface CategoryDropDown {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'exercise',
    templateUrl: './exercise.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExerciseComponent implements OnInit {
    exercice: Exercice;
    exerciceLoad: Exercice;
    categories: CategoryDropDown[];
    registerExercisesForm: FormGroup;
    exerciseIdUpdate: string;
    isUpdated: boolean;

    constructor(
        private route: ActivatedRoute,
        private _router: Router,
        private toast: ToastrService,
        private formBuilder: FormBuilder,
        private exerciceService: ExerciseService
    ) {
        this.isUpdated = false;
    }

    ngOnInit(): void {
        this.categories = [
            {value: 'ABS', viewValue: 'ABS'},
            {value: 'ARMS', viewValue: 'ARMS'},
            {value: 'BACK', viewValue: 'BACK'},
            {value: 'CHEST', viewValue: 'CHEST'},
            {value: 'LEGS', viewValue: 'LEGS'},
            {value: 'SHOULDERS', viewValue: 'SHOULDERS'},
        ];
        this.route.params.subscribe((params) => {
            const {id} = params;
            this.exerciseIdUpdate = id;
            if (this.exerciseIdUpdate) {
                this.exerciceService.getById(id).subscribe(
                    (data) => {
                        this.exerciceLoad = data;
                        this.loadExercice();
                    },
                    (err) => {
                        console.log(err);
                    }
                );
            }
        });

        this.startForm();
    }

    startForm(): void {
        console.log(this.exerciceLoad);
        this.registerExercisesForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            description: [null, [Validators.required]],
            category: [null, [Validators.required]],
        });
    }

    async registerExercises(): Promise<void> {
        if (this.registerExercisesForm.valid) {
            console.log(this.registerExercisesForm.value);
            this.exercice = {...this.registerExercisesForm.value};
            if (this.exerciseIdUpdate) {
                this.exerciceService
                    .updateExercise(this.exercice, this.exerciseIdUpdate)
                    .subscribe(async (data) => {
                        this.toast.success('Exercise updated successfully');
                        this.registerExercisesForm.reset();
                        this.exerciseIdUpdate = null;
                        this.isUpdated = false;
                        await this._router.navigate(['exercise/list']);
                    });
            } else {
                this.exerciceService.createExercice(this.exercice).subscribe({
                    next: () => {
                        this.registerExercisesForm.reset();
                        this.toast.success('Exercice registration successful');
                    },
                });
            }
        } else {
            this.toast.info('Atenção existem campos obrigatórios em branco');
        }
    }

    loadExercice(): void {
        this.registerExercisesForm.patchValue({
            name: this.exerciceLoad.name,
            description: this.exerciceLoad.description,
            category: this.exerciceLoad.category,
        });
    }
}
