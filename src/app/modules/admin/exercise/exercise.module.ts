import {NgModule} from '@angular/core';
import {ExerciseComponent} from 'app/modules/admin/exercise/exercise.component';
import {FuseCardModule} from '../../../../@fuse/components/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExerciseRoutingModule} from './exercise-routing.module';
import {ListAllExerciseComponent} from './list-all-exercise/list-all-exercise.component';
import {NgForOf, NgIf} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    declarations: [ExerciseComponent, ListAllExerciseComponent],
    imports: [
        FuseCardModule,
        ExerciseRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        NgForOf,
        MatDividerModule,
        MatSelectModule,
        FormsModule,
        MatTooltipModule,
        NgIf,
    ],
})
export class ExerciseModule {
}
