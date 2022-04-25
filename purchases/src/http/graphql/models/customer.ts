import { Purchase } from './purchase';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
@Directive('@key(fields: "authUserId")')
export class Customer {
  id: string;

  @Field(() => ID)
  authUserId: string;

  @Field(() => [Purchase])
  purchases: Purchase[];
}