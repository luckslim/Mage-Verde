import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/unique-entity-id";
export interface questionsProps {
  authorId: string;
  title: string;
  content: string;
  createdAt: Date;
}
export class Questions extends Entity<questionsProps> {
  get authorId() {
    return this.props.authorId;
  }
  get title() {
    return this.props.title;
  }
  get content() {
    return this.props.content;
  }
  get createdAt() {
    return this.props.createdAt;
  }

  set authorId(authorId: string) {
    this.props.authorId = authorId;
  }
  set title(title: string) {
    this.props.title = title;
  }
  set content(content: string) {
    this.props.content = content;
  }

  static create(props: questionsProps, id?: UniqueEntityID) {
    const questions = new Questions(props, id);
    return questions;
  }
}
