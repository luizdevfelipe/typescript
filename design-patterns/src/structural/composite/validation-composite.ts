// Component
export abstract class ValidationComponent {
    abstract validate(value: unknown): boolean;
}

// Leafs
export class ValidateEmail extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') return false;
        return /([a-z0-9\-\.]{2,})@([a-z0-9]{2,})(\.[a-z]{2,})(\.[a-z]{2,})?/.test(value);
    }
}

export class ValidateNumber extends ValidationComponent {
    validate(value: unknown): boolean {
        if (typeof value !== 'string') return false;
        return /\d+/.test(value);
    }
}

// Composite
export class ValidationComposite extends ValidationComponent {
    private readonly children: ValidationComponent[] = [];
    
    validate(value: unknown): boolean {
        for (const child of this.children) {
            const validation = child.validate(value);
            if (!validation) return false;
        }
        return true;
    }

    add(...validations: ValidationComponent[]): void {
        validations.forEach((validation) => this.children.push(validation));
    }
}

// Client Code

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const emailHasNumberValidator = new ValidationComposite();

emailHasNumberValidator.add(validateEmail, validateNumber);
console.log( emailHasNumberValidator.validate('email@email.com') ); // false
console.log( emailHasNumberValidator.validate('email123@email.com') ); // true