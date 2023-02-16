import { DomainEvent } from "../../core/DomainEvent";
import { Order } from "./order";

export class OrderCreatedEvent implements DomainEvent {
  public order: Order;
  public createdAt: Date;

  constructor(order: Order) {
    this.createdAt = new Date();
    this.order = order;
  }

  getEntityId(): string {
    return this.order.id;
  }
}
