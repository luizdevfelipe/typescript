import { BaseBudgetHandler } from "./base-budget-hander";
import { CustomerBudget } from "./customer-budget";

export class DirectorBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.amount <= 50_000) {
            console.log("O Diretor tratou o orçamento");
            budget.approved = true;
            return budget;
        }

        return super.handle(budget);
    }
}