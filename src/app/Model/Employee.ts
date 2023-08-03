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
    createdOn: any
    updatedBy:string
    createdBy: any
    updatedOn:any
    isActive: any
   
}

export interface DepartmentModel {
    deptId: string
    departmentName: string
    branchId: string
    branchName: string
    createdOn: string
    updatedBy: any
    createdBy: string
    updatedOn: any
    isActive: boolean
}
