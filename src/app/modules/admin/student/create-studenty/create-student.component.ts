import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from 'app/core/services/student.service';
import {ToastrService} from 'ngx-toastr';

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

    constructor(
        private toast: ToastrService,
        private formBuilder: FormBuilder,
        private studentService: StudentService
    ) {
    }

    ngOnInit(): void {
        this.startForm();
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
            this.student = {...this.registerStudentForm.value};
            this.studentService.createStudent(this.student).subscribe({
                next: () => {
                    this.registerStudentForm.reset();
                    this.toast.success('Student registration successful');
                },
                error: () => {
                    this.toast.error('Ocorreu erro no servidor.');
                },
            });
        } else {
            this.toast.info('Atenção existem campos obrigatórios em branco');
        }
    }

    processSuccessor(success): void {
        console.log(success);
        this.registerStudentForm.reset();
        this.toast.success('Paciente cadastrado com sucesso');
    }

    processorError(error: any): void {
        switch (error.status) {
            case 500:
                this.toast.error('Ocorreu erro no servidor.');
                break;
            case 401:
                this.toast.error(error.error.message);
                break;
            case 400:
                this.toast.error(error.error.message);
                break;
        }
    }
}
