import { BaseBudgetHandler } from "./base-budget-hander";
import { CustomerBudget } from "./customer-budget";

export class ManagerBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.amount <= 5000) {
            console.log("O Gerente tratou o orçamento");
            budget.approved = true;
            return budget;
        }

        return super.handle(budget);
    }
}