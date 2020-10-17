

(
    function ()
    {
        let App = window.App || {}

        function Company (employees) {

            this.employees = employees
        }

        Company.prototype.hireEmployee = function (employee)
        {
            return this.employees.add(employee)
        }

        Company.prototype.fireEmployee = function (id)
        {
            return this.employees.remove(id)
        }
        Company.prototype.computeBudget = function (salary)
        {
            return this.employees.find(salary)
        }

        Company.prototype.processEmployees = function (process)
        {
            this.employees.getAll().forEach(process)
        }
        App.Company = Company
        window.App = App
    }
)()