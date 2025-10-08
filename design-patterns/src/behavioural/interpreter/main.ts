// npx ts-node --files --transpile-only src/behavioural/interpreter/main.ts

// Context
class Context {
  private data: Record<string, boolean> = {};
  set(key: string, value: boolean): void { this.data[key] = value; }
  get(key: string): boolean { return this.data[key]; }
}

// Abstract Expression
interface Expression { interpret(ctx: Context): boolean; }

// Terminal Expressions
class VariableExpression implements Expression {
  constructor(private name: string) {}
  interpret(ctx: Context): boolean { return ctx.get(this.name); }
}

class ConstantExpression implements Expression {
  constructor(private value: boolean) {}
  interpret(_: Context): boolean { return this.value; }
}

// Non-terminal Expressions
class AndExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(ctx: Context): boolean { return this.left.interpret(ctx) && this.right.interpret(ctx); }
}

class OrExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}
  interpret(ctx: Context): boolean { return this.left.interpret(ctx) || this.right.interpret(ctx); }
}

// Usage
const ctx = new Context();
ctx.set("isAdmin", true);
ctx.set("hasAccess", false);

const expr: Expression = new OrExpression(
  new VariableExpression("isAdmin"),
  new AndExpression(new VariableExpression("hasAccess"), new ConstantExpression(true))
);

console.log("Result:", expr.interpret(ctx)); // true (porque isAdmin = true)