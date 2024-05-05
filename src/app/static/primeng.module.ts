import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { EditorModule } from 'primeng/editor';
import { RatingModule } from 'primeng/rating';
import { TreeModule } from 'primeng/tree';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { SliderModule } from 'primeng/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { InputMaskModule } from 'primeng/inputmask';
const PRIMENG_MODULES:any[]=[
    CommonModule,
    InputMaskModule,
    RatingModule,
    ReactiveFormsModule,
    SliderModule,
    ChipsModule,
    MessagesModule,
    DialogModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    RadioButtonModule,
    ListboxModule,
    OverlayPanelModule,
    FieldsetModule,
    MultiSelectModule,
    CheckboxModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule,
    SidebarModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    EditorModule,
    RatingModule,
    SidebarModule,
    TreeModule,
    ChipModule ,
    MenubarModule,
    ToolbarModule,
    InputTextModule,
    DropdownModule,
    KeyFilterModule,
]

@NgModule({
  declarations: [],
  imports: [...PRIMENG_MODULES],
  exports:[...PRIMENG_MODULES],
})
export class PrimengModule { }
