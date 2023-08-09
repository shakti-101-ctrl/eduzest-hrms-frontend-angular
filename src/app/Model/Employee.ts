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

export interface DesignationModel {
    desigid?:string;
    designationname?:string;
    branchId?:string;
    branchName?:string;
    departmentId?:string;
    departmentName?:string;
    createdOn:any;
    createdBy?:string;
    updatedOn:any;
    updatedBy?:string;
    isActive:any;
}

