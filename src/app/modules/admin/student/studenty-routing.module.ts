import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-studenty/create-student.component';
import { ListAllStudentComponent } from './list-all-student/list-all-student.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'list', component: ListAllStudentComponent },
            { path: 'create', component: CreateStudentComponent },
            { path: 'update/:id', component: CreateStudentComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentyRoutingModule {}
