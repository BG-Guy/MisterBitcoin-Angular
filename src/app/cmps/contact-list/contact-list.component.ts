import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ContactListComponent implements OnInit {

  constructor() { }
  @Input() contacts: Contact[]
  @Output('remove') onRemove = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
