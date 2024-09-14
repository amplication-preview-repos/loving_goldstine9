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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SerialOrderByInput } from "./SerialOrderByInput";

@ArgsType()
class SerialFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SerialWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SerialWhereInput, { nullable: true })
  @Type(() => SerialWhereInput)
  where?: SerialWhereInput;

  @ApiProperty({
    required: false,
    type: [SerialOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SerialOrderByInput], { nullable: true })
  @Type(() => SerialOrderByInput)
  orderBy?: Array<SerialOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SerialFindManyArgs as SerialFindManyArgs };
