/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SerialWhereInput } from "./SerialWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SerialCountArgs {
  @ApiProperty({
    required: false,
    type: () => SerialWhereInput,
  })
  @Field(() => SerialWhereInput, { nullable: true })
  @Type(() => SerialWhereInput)
  where?: SerialWhereInput;
}

export { SerialCountArgs as SerialCountArgs };
