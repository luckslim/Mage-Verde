import { Entity } from "@/core/entities/entity";
import type { UniqueEntityID } from "@/core/entities/unique-entity-id";
export interface answerProps {
  authorId: string;
  title: string;
  content: string;
  createdAt: Date;
}
export class Answer extends Entity<answerProps> {
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

  static create(props: answerProps, id?: UniqueEntityID) {
    const answer = new Answer(props, id);
    return answer;
  }
}
