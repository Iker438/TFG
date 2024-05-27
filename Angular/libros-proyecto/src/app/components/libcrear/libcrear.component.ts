import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';

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
      toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      menubar: false,
      height: 400,
      language: 'es',
      encoding: 'UTF-8',
      entity_encoding: 'raw',
      content_css: 'css/styles.css?' + new Date().getTime(), // Añade la hoja de estilos con parámetro de tiempo para evitar caché
      apiKey: 'uexrkac648ndnub85gntb5q9yz1x9as20uz6yakriv55hud6', // Clave API de TinyMCE
      setup: (editor: any) => {
        editor.on('Change', (e: any) => {
          this.texto = editor.getContent({ format: 'html' }); // Obtiene el contenido con etiquetas HTML
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
    const splitDescription = doc.splitTextToSize(this.descripcion, doc.internal.pageSize.width - margin * 2);
    splitDescription.forEach((line: string) => {
      if (y + 10 > doc.internal.pageSize.height - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 10;
    });

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
