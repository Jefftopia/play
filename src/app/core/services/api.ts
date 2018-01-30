import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiChannel, CONFIG_TOKEN } from '../constants';
import { IOptions } from '../interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    private http: HttpClient;
    private baseUrl: string;

    constructor(http: HttpClient, @Inject(CONFIG_TOKEN) config: IOptions) {
        Object.assign(this, { http });

        this.baseUrl = config.URL_DATA;
    }

    public getFares(): Observable<{}> {
        return this.http.get(`${this.baseUrl}/fares.json`);
    }

    public getMaps(): Observable<{}> {
        return this.http.get(`${this.baseUrl}/map-data.json`);
    }
}
