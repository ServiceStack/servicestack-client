/* Options:
Date: 2016-07-14 13:43:11
Version: 4.061
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:48088

//GlobalNamespace: 
//ExportAsTypes: True
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturnVoid
{
}

export interface IReturn<T>
{
}

export class HelloResponse
{
    Result: string;
}

// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    Name: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "Hello"; }
}
