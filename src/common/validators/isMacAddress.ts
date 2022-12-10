import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';
  
  @ValidatorConstraint({ async: true })
  export class IsMacAddressConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        const regex = /((\d|[a-z]){2}\:){5}(\d|[a-z]){2}/gi;
        return value.match(regex)  
    }
  }
  
  export function IsMacAddress(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsMacAddressConstraint,
      });
    };
  }