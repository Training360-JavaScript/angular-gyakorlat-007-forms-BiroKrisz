import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable, of, switchMap } from 'rxjs';

import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {

  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap( params => this.eventService.get(params['id']))
  )

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

  }
  onUpdate(eventForm: NgForm): void {
    this.eventService.update(eventForm.value)
  }
}
