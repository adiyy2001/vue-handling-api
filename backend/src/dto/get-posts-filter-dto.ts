import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetPostsFilterDto {
    
    @IsOptional()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsNotEmpty()
    status: string;
}