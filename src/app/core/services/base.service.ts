import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';

export abstract class BaseService {
    protected constructor(http: HttpClient) {

    }


    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    protected getHeaderJson() {
        return {
            headers: new HttpHeaders({
                // eslint-disable-next-line @typescript-eslint/naming-convention
                'Content-Type': 'application/json'
            }),
        };
    }

    protected extractData(response: any): any {
        console.log(response)
        return response.data || {};
    }

    protected serviceError(response: Response | any): any {
        const costomError: string [] = [];
        if (response instanceof HttpErrorResponse) {
            if (response.statusText === 'Unknown Error') {
                costomError.push('Ocorreu um erro desconhecido');
                response.error.errors = costomError;
            }

        }
        return throwError(response);
    }
}


