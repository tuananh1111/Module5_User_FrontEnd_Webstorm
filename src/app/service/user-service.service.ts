import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private URL_API = 'http://localhost:8080/users/';

// Observable hứng dữ liệu từ back end ( cho phếp đối tượng thay đổi thì tất cả theo dõi được sự thay đổi đó)
  constructor(private http: HttpClient) {
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  createUser(user: IUser): Observable<any> {
    return this.http.post<IUser>(this.URL_API, user);
  }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(this.URL_API + `/${id}`);
  }

  updateUser(user: IUser): Observable<any> {
    return this.http.put<IUser>(this.URL_API + `${user.id}`, user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.URL_API + `${id}`);
  }
}
