import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentyRoutingModule} from './studenty-routing.module';
import {CreateStudentComponent} from './create-studenty/create-student.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FuseCardModule} from '../../../../@fuse/components/card';
import {ReactiveFormsModule} from '@angular/forms';
import {ListAllStudentComponent} from './list-all-student/list-all-student.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FuseAlertModule} from '../../../../@fuse/components/alert';
import {IMaskDirectiveModule} from 'angular-imask';

@NgModule({
    declarations: [CreateStudentComponent, ListAllStudentComponent],
    imports: [
        CommonModule,
        StudentyRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FuseCardModule,
        ReactiveFormsModule,
        MatTableModule,
        MatIconModule,
        MatTooltipModule,
        FuseAlertModule,
        IMaskDirectiveModule,
    ],
})
export class StudentModule {
}
