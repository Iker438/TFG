import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

declare var tinymce: any; // Declara la variable tinymce para evitar errores de TypeScript

@Component({
  selector: 'app-libcrear',
  templateUrl: './libcrear.component.html',
  styleUrls: ['./libcrear.component.css']
})
export class LibcrearComponent implements AfterViewInit {
  titulo: string = '';
  descripcion: string = '';
  texto: string = '';

  @ViewChild('editor', { static: true }) editorElement!: ElementRef; // Referencia al elemento del editor

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      target: this.editorElement.nativeElement,
      plugins: 'lists link image table code help wordcount',
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat',
      menubar: false,
      setup: (editor: any) => {
        editor.on('Change', (e: any) => {
          this.texto = editor.getContent({ format: 'text' }); // Obtiene el contenido sin etiquetas HTML
        });
      }
    });
  }

  guardar() {
    const doc = new jsPDF();
    const margin = 10;
    let y = margin;

    // Añadir título
    doc.setFontSize(28);
    doc.setFont("arial", "bold");
    doc.text(this.titulo.toUpperCase(), doc.internal.pageSize.width / 2, y, { align: 'center' });
    y += 20;

    // Añadir descripción
    doc.setFontSize(14);
    doc.setFont("arial", "normal");
    doc.text(this.descripcion, doc.internal.pageSize.width / 2, y, { align: 'center' });
    y += 20;

    // Añadir contenido del editor
    doc.setFontSize(12);
    doc.setFont("arial", "normal");
    const splitContent = doc.splitTextToSize(this.texto, doc.internal.pageSize.width - margin * 2);

    splitContent.forEach((line: string) => {
      if (y + 10 > doc.internal.pageSize.height - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 10;
    });

    doc.save(`${this.titulo}.pdf`);
  }
}
