import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuseCardModule } from '../../../../@fuse/components/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListWorkoutByStudentComponent } from './list-workout-by-student/list-workout-by-student.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseAlertModule } from '../../../../@fuse/components/alert';

@NgModule({
    declarations: [CreateWorkoutComponent, ListWorkoutByStudentComponent],
    imports: [
        CommonModule,
        WorkoutRoutingModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FuseCardModule,
        MatInputModule,
        MatButtonModule,
        NgSelectModule,
        FormsModule,
        SharedModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatTooltipModule,
        FuseAlertModule,
    ],
})
export class WorkoutModule {}
