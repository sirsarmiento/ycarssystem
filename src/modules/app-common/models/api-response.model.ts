import { ApiResultDto } from './api-result.model';

export class ApiResponseDto {
    isValid: boolean = false;
    results: ApiResultDto[] = [];

    static getMessages(response: ApiResponseDto): string {
        var messages = '';

        if (response.results) {
            response.results.forEach((item) => messages = messages + item.message + '\n')
        }

        return messages;
    };
}

export class GenericApiResponseDto<T> extends ApiResponseDto {
    data?: T;
}