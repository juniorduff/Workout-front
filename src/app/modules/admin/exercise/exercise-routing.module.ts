import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {ExerciseComponent} from './exercise.component';
import {ListAllExerciseComponent} from './list-all-exercise/list-all-exercise.component';

const routes: Route[] = [
    {
        path: '',
        children: [
            {path: 'register', component: ExerciseComponent},
            {path: 'update/:id', component: ExerciseComponent},
            {path: 'list', component: ListAllExerciseComponent},
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExerciseRoutingModule {
}
