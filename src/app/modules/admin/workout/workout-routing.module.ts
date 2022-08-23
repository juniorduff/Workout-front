import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { ListWorkoutByStudentComponent } from './list-workout-by-student/list-workout-by-student.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'create', component: CreateWorkoutComponent },
            { path: 'list', component: ListWorkoutByStudentComponent },
            { path: 'update/:id', component: CreateWorkoutComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkoutRoutingModule {}
