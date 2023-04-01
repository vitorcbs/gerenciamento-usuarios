import {
  Component,
  EventEmitter,
  Injectable,
  OnInit,
  Output
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../services/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class RemoveUserComponent implements OnInit {
  @Output() removerUserEvent = new EventEmitter<void>();

  user: User = {
    id: 0,
    nome: '',
    sobrenome: '',
    email: '',
    data: new Date(''),
    escolaridade: '',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //ParamMap é o mapa das informações do card, e eu vou pegar o ID desse card
    this.service.searchUserId(parseInt(id!)).subscribe((user) => {
      this.user = user;
    });
  }

  removeUser() {
    if (this.user.id) {
      this.service.excluir(this.user.id).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  cancelRemove() {
    this.router.navigate(['']);
  }

  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
