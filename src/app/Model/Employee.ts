import { ICommonProperties } from "./ICommon";

export interface BranchModel extends  ICommonProperties
{
    branchId: string
    branchName: string
    email: string
    mobileNumber: string
    city: string
    state: string
    address: string
   
}