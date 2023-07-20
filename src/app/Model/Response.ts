
export interface GetResponse
{
        data :any;
        success: string;
        message : string;
        response: number;
        
}
export interface CudResponse<T>
{
        data :T;
        success: string;
        message : string;
        response: number;
}