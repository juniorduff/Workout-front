import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'app/core/services/student.service';
import { ToastrService } from 'ngx-toastr';

export type StudentData = {
    name: string;
    email: string;
    phone: string;
};

@Component({
    selector: 'app-create-student',
    templateUrl: './create-student.component.html',
    styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent implements OnInit {
    student: StudentData;
    // eslint-disable-next-line @typescript-eslint/naming-convention

    registerStudentForm: FormGroup;
    studentIdUpdate: string;
    studentToUpdate: StudentData;

    constructor(
        private toast: ToastrService,
        private formBuilder: FormBuilder,
        private studentService: StudentService,
        private activedRoute: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.startForm();
        this.activedRoute.params.subscribe((params) => {
            const { id } = params;
            this.studentIdUpdate = id;
            if (this.studentIdUpdate) {
                this.studentService.getById(id).subscribe((data) => {
                    this.studentToUpdate = data;
                    console.log(data, 'data');
                    this.loadStudent(data);
                });
            }
        });
    }

    startForm(): void {
        this.registerStudentForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required]],
            phone: [null, [Validators.required]],
        });
    }

    registerStudent(): void {
        if (this.registerStudentForm.valid) {
            this.student = { ...this.registerStudentForm.value };

            if (this.studentIdUpdate) {
                this.studentService
                    .updateUser(this.studentIdUpdate, this.student)
                    .subscribe({
                        next: async () => {
                            this.registerStudentForm.reset();
                            this.toast.success('Student update successful');
                            await this._router.navigate(['/student/list']);
                        },
                        error: () => {
                            this.toast.error('Ocorreu erro no servidor.');
                        },
                    });
            } else {
                this.studentService.createStudent(this.student).subscribe({
                    next: () => {
                        this.registerStudentForm.reset();
                        this.toast.success('Student registration successful');
                    },
                    error: () => {
                        this.toast.error('Ocorreu erro no servidor.');
                    },
                });
            }
        } else {
            this.toast.info('Atenção existem campos obrigatórios em branco');
        }
    }

    loadStudent(data: StudentData): void {
        this.registerStudentForm.patchValue({
            name: data.name,
            email: data.email,
            phone: data.phone,
        });
    }
}
