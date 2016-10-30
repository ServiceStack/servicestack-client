/* Options:
Date: 2016-10-30 04:42:51
Version: 4.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://test.servicestack.net

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: IReturn`1,HelloTypes
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
}

// @Route("/hellotypes/{Name}")
export class HelloTypes implements IReturn<HelloTypes>
{
    string: string;
    bool: boolean;
    int: number;
    createResponse() { return new HelloTypes(); }
    getTypeName() { return "HelloTypes"; }
}