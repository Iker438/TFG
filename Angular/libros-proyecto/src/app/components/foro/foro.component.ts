import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../../services/comments.service';

interface User {
  id: number;
  username: string;
  role: string;
}

interface Comment {
  id: number;
  message: string;
  user: string;
  date: string;
}

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  user: User = { id: 0, username: '', role: '' };
  comments: Comment[] = [];
  newComment: Partial<Comment> = { id: 0, message: '', user: '', date: '' };
  editingComment: Partial<Comment> | null = null;

  constructor(
    private commentsService: CommentsService,
    private msj: ToastrService
  ) { }

  ngOnInit(): void {
    this.readComments();
    // Simulate getting the user (this should come from an authentication service)
    this.user = { id: 1, username: 'admin', role: 'admin' }; // Example user
  }

  async readComments() {
    this.commentsService.getComments().subscribe(
      (data) => {
        this.comments = data.filter((comment: Comment) => comment.user === this.user.username);
      },
      (error) => {
        this.msj.error("Error al obtener los comentarios");
      }
    );
  }

  addComment() {
    this.newComment.user = this.user.username;
    this.newComment.date = new Date().toISOString();

    this.commentsService.addComment(this.newComment as Comment).subscribe(
      (response) => {
        this.readComments();
        this.newComment.message = '';
        this.msj.success("¡Comentario agregado!");
      },
      (error) => {
        this.msj.error("Algo salió mal al agregar el comentario");
      }
    );
  }

  editComment(comment: Comment) {
    this.editingComment = { ...comment };
  }

  saveComment() {
    if (this.editingComment) {
      this.commentsService.updateComment(this.editingComment as Comment).subscribe(
        (response) => {
          this.readComments();
          this.editingComment = null;
          this.msj.success("¡Comentario actualizado!");
        },
        (error) => {
          this.msj.error("Algo salió mal al actualizar el comentario");
        }
      );
    }
  }

  cancelEdit() {
    this.editingComment = null;
  }

  deleteComment(id: number) {
    this.commentsService.deleteComment(id).subscribe(
      (response) => {
        this.readComments();
        this.msj.success("¡Comentario eliminado!");
      },
      (error) => {
        this.msj.error("Algo salió mal al eliminar el comentario");
      }
    );
  }
}
