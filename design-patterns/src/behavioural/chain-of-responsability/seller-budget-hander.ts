import { BaseBudgetHandler } from "./base-budget-hander";
import { CustomerBudget } from "./customer-budget";

export class SellerBudgetHandler extends BaseBudgetHandler {
    handle(budget: CustomerBudget): CustomerBudget {
        if (budget.amount <= 1000) {
            console.log("O Vendedor tratou o orçamento");
            budget.approved = true;
            return budget;
        }

        return super.handle(budget);
    }
}